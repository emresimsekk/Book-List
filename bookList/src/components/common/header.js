import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    const {header, headerText, text} = styles;
    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
}

export {Header};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfd8dc',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginBottom:35
  },
  headerText: {
    color: '#37474f',
    fontSize: 19,
  },
});
