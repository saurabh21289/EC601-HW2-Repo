/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://pixabay.com/static/uploads/photo/2016/03/08/10/10/small-fresh-1243655_960_720.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 250, height: 210}}/>

        <Text style={styles.welcome}>
          Hellow World! This is a React Native app.
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
