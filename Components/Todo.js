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
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>
          Idea Voting App
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>

      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please Enter Your Idea"
          placeholderTextColor='white'
          underlineColorAndroid='transparent'>

          </TextInput>
        </View>

        <TouchableOpacity>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    backgroundColor: '#a81303',
    paddingTop: 20,
    paddingBottom: 35,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
AppRegistry.registerComponent('Todo', () => Todo);
