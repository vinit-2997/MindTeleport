import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-360';

import GazeButton from '../../components/GazeButton';

import styles from './styles'

const News = (title, text, imageUrl) => (
	<View style={styles.newsContainer}>
		<Text style={styles.title}>
		 {title}
		</Text>
		<View>
			<Image source={imageUrl}/>
			<Text style={styles.title}>
				{text}
			</Text>
		</View>
	</View>
)

class Home extends React.Component {

	setGazed = () => {
		this.setState({ gazed: true, isLoading: true });
	};

	state = {
		gazed: false,
		isLoading: false,

		currentIndex: 0,

		news: [],

		title: 'Default title',
		imageUrl: '',
		text: 'Default description',
	}

	componentWillMount = () => {
		this.fetchNews('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5019130324db4f7b98443775a702faaf')
	}

 	fetchNews = async (source) => {
		try {
		  let response = await fetch(
			source,
		  );
		  let responseJson = await response.json();
			console.log(responseJson)
		  this.setState({
			  news: responseJson.articles,
			  title: responseJson.articles[0].title,
			  text: responseJson.articles[0].description,
			  imageUrl: responseJson.articles[0].urlToImage
		  })
		} catch (error) {
		  console.error(error);
		}
	}

	loadNews = (index) => {
		this.setState({
			currentIndex: index,
			title: this.state.news[index].title,
			text: this.state.news[index].description,
			imageUrl: this.state.news[index].urlToImage
		})
	}

	loadNext = async () => {
		this.state.currentIndex === this.state.news.length 
			? this.fetchNews('news') 
			: this.loadNews(this.state.currentIndex + 1)
	}

	loadPrevious = async () => {
		this.state.currentIndex === 0 
			? this.fetchNews('news') 
			: this.loadNews(this.state.currentIndex - 1)
	}

  render() {
	const { gazed, title, imageUrl, text, isLoading } = this.state;
    return (
      <View style={styles.panel}>
		<GazeButton
			duration={1000}
			onClick={this.loadPrevious}
			render={(remainingTime, isGazed) => {

				const opacity = 1 - (remainingTime/1000)

				return (
					<View style={[styles.greetingBox, {backgroundColor: `rgba(255,255,255,${opacity})`, justifyContent: 'flex-start', }]}>
						<Text style={styles.greeting}>
							{gazed
							? "You have gazed me"
							: isGazed
								? "..."
								: "back"}
						</Text>
					</View>
				)}
			}
			style={styles.gazeButton}
		/>


		<View style={styles.titleContainer}>
			<Text style={styles.title}>
				{title}
			</Text>
		</View>
		<View style={styles.bodyContainer}>
				<Image style={styles.image} source={{uri: imageUrl}} />
				<Text style={styles.text}>
					{text}
				</Text>
		</View>

		<GazeButton
			duration={1000}
			onClick={this.loadNext}
			render={(remainingTime, isGazed) => {

				const opacity = 1 - (remainingTime/1000)

				return (
					<View style={[styles.greetingBox, {backgroundColor: `rgba(255,255,255,${opacity})`, justifyContent: 'flex-end', }]}>
						<Text style={styles.greeting}>
							{gazed
							? "You have gazed me"
							: isGazed
								? "..."
								: "next"}
						</Text>
					</View>
				)}
			}
			style={styles.gazeButton}
		/>		
	</View>
    );
  }
};


export default Home
