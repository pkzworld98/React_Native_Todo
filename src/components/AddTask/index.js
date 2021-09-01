import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {style} from './stylesheet';
import Icon2 from 'react-native-vector-icons/Entypo';

import TodoList from '../TodoList';

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      data: 'What need to be done?',
    };
  }
  addTask = () => {
    this.setState({
      data: 'Add more task',
    });

    this.props.press();
    this.props.clear();
  };

  render() {
    return (
      <View style={style.container}>
        <TextInput
          value={this.props.message}
          style={style.input}
          placeholder={this.state.data}
          placeholderTextColor="silver"
          onChangeText={this.props.onChange}
        />
        {/* <PlusSquareTwoTone /> */}
        <Icon2.Button
          name="circle-with-plus"
          backgroundColor="rgba(0,0,0,0.0)"
          onPress={this.addTask}
          color="white"
        />

        {/* <Button
          color="orange"
          style={style.button}
          title="+"
          onPress={}
        /> */}
      </View>
    );
  }
}
