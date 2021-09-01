import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {style} from './stylesheet';

import TodoList from '../TodoList';

export default class AddTask extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="What need to be done?"
          placeholderTextColor="silver"
          onChangeText={this.props.onChange}
        />
        {/* <PlusSquareTwoTone /> */}

        <Button
          color="orange"
          style={style.button}
          title="+"
          onPress={this.props.press}
        />
      </View>
    );
  }
}
