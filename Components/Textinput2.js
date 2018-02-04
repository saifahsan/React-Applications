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
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';

export default class Textinput2 extends Component {

  componentDidMount: function() {
      AsyncStorage.getItem("myKey").then((value) => {
          this.setState({"myKey": value});
      }).done();
  },

  getInitialState: function() {
      return { };
  },

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Idea Voting App
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Text>
          {this.state.myKey}
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
        style={styles.textInput}
        placeholder="Please enter your idea"
        placeholderTextColor='white'
        onChangeText={(text) => this.saveData(text)}
        value=""
      />
      </View>
      <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

    </View>
    );
  },

  saveData: function(value) {
      AsyncStorage.setItem("myKey", value);
      this.setState({"myKey": value});
  }
}


  saveData: function(value) {
      AsyncStorage.setItem("myKey", value);
      this.setState({"myKey": value});
  }

const styles = StyleSheet.create({
  container: {

  },
  header: {
    backgroundColor: '#a81303',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
  },
  headerText: {
      color: 'white',
      fontSize: 25,
      padding: 26,
      alignItems: 'center',
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  messageBox: {
    backgroundColor: '#ef553a',
    width: 300,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  messageBoxTitleText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  messageBoxBodyText: {
    color: '#fff',
    fontSize: 16
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#a81303',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
  },
});
AppRegistry.registerComponent('Textinput2', () => Textinput2);
