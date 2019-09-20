import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  NativeModules,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import InfoButton from './components/InfoButton';
import Promo from './components/Promo';
import Events from './components/Events';
import RockStarBeach from './components/RockStarBeach';

import Home from './src/scenes/Home'


const SCENES = ['Promo', 'Events', 'Rockstar Beach']; 
const {AudioModule} = NativeModules;


class Scene extends React.Component {
  state = {
    scene: ''
  }

  componentDidMount() {
    Environment.setBackgroundImage(asset('homebase.png'), { rotateTransform: [{rotateY: '180deg'}] });
  }

  clearMedia() {
    Environment.clearBackground();
  }

  clickHandler(selection) {
    this.setState({
      scene: selection
    })

    this.clearMedia();
  }

  render() {
    const scene = this.state.scene;
    let selection;
    const sceneButtons = [];

    if (scene === 'Promo') {
      selection = <Promo />;
    } else if (scene === 'Events') {
      selection = <Events />;
    } else if (scene === 'Rockstar Beach') {
      selection = <RockStarBeach />;
    }

    for (let i in SCENES) {
      sceneButtons.push(
        <InfoButton
          key={i}
          style={styles.button}
          source={asset('palm-tree.png')}
          text={SCENES[i]}
          onClick={() => { this.clickHandler(SCENES[i])}}
        />
      )
    }

    return(
      <View style={styles.panel}>
        <View>
          {selection}
        </View>
        <View style={styles.section}>
          {sceneButtons}
        </View>
      </View>
    )
  }
}

export default class Brain extends React.Component {
  state =
  {
    button_pressed: '',
    message:'Welcome to your Brain Dashboard !'
  }

  render() {
    return (
      // <View style={styles.panel}>
      //   <View style={styles.greetingBox}>
      //     <Text style={styles.greeting}>
      //       Welcome to React 360
      //     </Text>
      //   </View>
      // </View>
<View>
      <View style={styles.greetingBox}>
      <View style={styles.greetingBox}>
          <Text>Welcome to your Brain-Dashboard</Text>
          </View>

      <View style={styles.greetingBox}>
          <Text>Just think of a particular place and teleport to a new (Virtual) World</Text>
          <Text>Available Options : </Text>

          <Text>1) Hawaii Beach </Text>
          <Text>2) Mountains</Text>
          <Text>3) Paris City </Text>
          <Text>4) Forests</Text>

  </View>
</View>


      
      <View style={styles.panel_video} onInput={e => {
        const inputEvent = e.nativeEvent.inputEvent;
        //console.log(inputEvent.button);


        if (inputEvent.button ===38 && inputEvent.source === 'keyboard') 
        {
          console.log('pressed up');
          
          this.setState({button_pressed:'up', message:'You have just teleported to the Hawaii Beach....Relax'})
          Environment.setBackgroundImage(asset('hawaii_beach.jpg'), { rotateTransform: [{rotateY: '180deg'}] });
          AudioModule.stopEnvironmental();

          AudioModule.playEnvironmental({
            source: asset(`audio/waves.mp3`),
            volume: 0.3,
        });
        }

        if (inputEvent.button ===40 && inputEvent.source === 'keyboard') 
        {
          console.log('pressed down');
          this.setState({button_pressed:'down',message:'You have just teleported to the Mountains...'})
          Environment.setBackgroundImage(asset('horseshoe_bend.jpg'), { rotateTransform: [{rotateY: '180deg'}] });
          AudioModule.stopEnvironmental();

          AudioModule.playEnvironmental({
            source: asset(`audio/birds.mp3`),
            volume: 0.3,
        });
        }
       
        if (inputEvent.button ===37 && inputEvent.source === 'keyboard') 
        {
          console.log('pressed left');
          this.setState({button_pressed:'left',message:'You have just teleported to Paris...Enjoy'})
          Environment.setBackgroundImage(asset('sunrise_paris_2.jpg'), { rotateTransform: [{rotateY: '180deg'}] });
          AudioModule.stopEnvironmental();

          AudioModule.playEnvironmental({
            source: asset(`audio/chimes.mp3`),
            volume: 0.3,
        });
        }

        if (inputEvent.button ===39 && inputEvent.source === 'keyboard') 
        {
          console.log('pressed right');
          this.setState({button_pressed:'right', message:'You have just teleported the rainforests...spot the animals'})
          Environment.setBackgroundImage(asset('forest2.jpg'), { rotateTransform: [{rotateY: '180deg'}] });
          AudioModule.stopEnvironmental();

          AudioModule.playEnvironmental({
            source: asset(`audio/forest.mp3`),
            volume: 0.3,
        });
        }
        
      }}>
           <View>
              <View style={styles.greetingBox}>
                {/* <Text>Button_pressed_kya: {this.state.button_pressed}</Text> */}
                <Text>{this.state.message}</Text>
              </View>
      </View>
        { /* ... */ }
    </View>

    </View>
    );
  }
};


const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 450,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  section: {
    padding: 10,
    backgroundColor: '#FFE500',
    borderColor: '#ED8B00',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  },

  panel_video: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Scene', () => Scene);
AppRegistry.registerComponent('Brain', () => Brain);
AppRegistry.registerComponent('Home', () => Home);


