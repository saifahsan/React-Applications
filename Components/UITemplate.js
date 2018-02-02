import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class UITemplate extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.navBar}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create (
  {
    container: {
      flex: 1
    },
    navBar: {
      height: 55,
      backgroundColor: 'white',
      elevation: 3
    }
  }
);

AppRegistry.registerComponent('UITemplate', () => UITemplate);
