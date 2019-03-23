/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constuctor(props)
  {
    //super(props);
    this.state={text:''};
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.borderStyle}>
          <TextInput style={styles.welcome}>Welcome to React Native!</TextInput>
        </View>

      </View>
    );
  }

 /*  emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }*/

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6e40a2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  borderStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    backgroundColor: '#000'
  },
});
