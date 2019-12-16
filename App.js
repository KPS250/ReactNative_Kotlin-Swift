import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          React Native with {Platform.OS === 'ios' ? 'Swift' : 'Kotlin'}
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
  },
});
