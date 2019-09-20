import {
	StyleSheet,
  } from 'react-360';

const styles = StyleSheet.create({
	panel: {
		// Fill the entire surface
		width: 1000,
		height: 600,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	greetingBox: (elapsed, total) => ({
		padding: 20,
		backgroundColor: `rgba(255, 255, 255, 1)`,
		borderColor: '#639dda',
		borderWidth: 2,
		marginTop: 5,
	}),
	greeting: {
	  fontSize: 30,
	  textAlign: 'center',
	},
	title: {
		backgroundColor: 'rgba(255, 255, 255, 0)',
		fontSize: 30,
		color: '#fff',
		textAlign: 'center',
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	gazeButton: {
		backgroundColor: 'rgba(255, 255, 255, 0)',
		borderRadius: 2,
		justifyContent: 'center',
		width: '100%',
		height: 100,
	},
	titleContainer:{
		flex: 0.2,
		backgroundColor: 'rgba(0,0,0, 1)',
		justifyContent: 'center',
		width: '100%',
	},
	bodyContainer:{
		justifyContent: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 0.8,
	},
	image:{ 
		backgroundColor: 'rgba(255, 255, 255, 0)',
		width: 160,
		flex: 0.2,
	},
	text: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		fontSize: 40,
		flex: 0.8,
		fontWeight: 'bold',
	},
  });

  export default styles