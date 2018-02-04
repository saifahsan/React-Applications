import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Idea extends Component {
  render() {
    return (
      <View key-{this.props.keyvalue} style={styles.idea}>
        <Text style={styles.ideaText}> {this.props.val.date}</Text>
        <Text style={styles.ideaText}> {this.props.val.idea}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.ideaDelete}>
            <Text style={styles.ideaDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    idea: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    ideaText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    ideaDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    ideaDeleteText: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Idea', () => Idea);
