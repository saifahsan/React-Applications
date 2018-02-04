import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Home from './Components/Home.js';
import Textinput2 from './Components/Textinput2.js';
import UITemplate from './Components/UITemplate.js';
import Todo from './Components/Todo.js';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
          <Textinput2 />
      </View>
    );
  }
}

AppRegistry.registerComponent('ideavotingapp', () => App);
