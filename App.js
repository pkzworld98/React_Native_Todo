/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Home from './src/containers/Home';

const App = () => {
  return (
    <ImageBackground
      source={require('./src/wall.jpeg')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        width: null,
        height: null,
      }}>
      <SafeAreaView style={{}}>
        <Home />
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({});

export default App;
