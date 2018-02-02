import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';

export default class Textinput extends Component < {} > {
  constructor() {
    super();
    this.state = {}
  }
  // onChangeText(value) {
  //   this.setState({textValue: value});
  // }

  // onPressLearnMore (value) {
  //   this.setState({textValue: value});
  // }

  render() {
    return (
      <View>
      <View style = {styles.navBar}>
        <Image source = {require ('./images/logo.jpg')}
        style = {{
          width: 50,
          height: 12,
        }}
      />
      </View>

      <View>
        <TextInput
        placeholder="Please enter your idea"
        style={styles.textBox}
        value={this.state.textValue}
        />

        <Button onPress={() => {
          Alert.alert('You submitted your idea!');
        }}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create (
  {
    containerBox: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    navBar: {
      height: 50,
      backgroundColor: 'white',
      elevation: 3
    },
    textIntake: {
      height: 40,
      elevation: 3,
      justifyContent: 'center',
    },
    textBox: {
      height: 100,
    }
  }
);

AppRegistry.registerComponent('Textinput', () => Textinput);
