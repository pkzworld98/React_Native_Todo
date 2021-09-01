import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {style} from './stylesheet';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/AntDesign';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.data.completed,
    };
  }
  checkBoxHandler = e => {
    this.setState({
      selected: !this.state.selected,
    });
    this.props.completed(this.props.data);
  };
  render() {
    const handler = e => {
      this.props.action(this.props.data.id);
    };

    return (
      <View style={style.container}>
        <CheckBox
          checkBoxColor="orange"
          onClick={() => {
            this.checkBoxHandler();
          }}
          isChecked={this.state.selected}
        />
        <View style={style.message}>
          <Text
            style={
              !this.state.selected ? style.completedTask : style.uncompletedTask
            }>
            {this.props.data.message}
          </Text>
        </View>
        <Icon.Button
          name="delete"
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          onPress={handler}
        />

        {/* <Button title="delete" onPress={handler} /> */}
      </View>
    );
  }
}
