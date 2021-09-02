import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {style} from './stylesheet';
import Icon2 from 'react-native-vector-icons/Entypo';

import {addTask} from '../../actions/todos';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addTask(e)),
});

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      data: 'What need to be done?',
      message: '',
    };
  }

  handler = () => {
    this.setState({
      data: 'Add More Task',
      message: '',
    });
    this.props.add(this.state.message);
  };

  render() {
    console.log('pkwala msg', this.state.message);
    return (
      <View style={style.container}>
        <TextInput
          value={this.state.message}
          style={style.input}
          placeholder={this.state.data}
          placeholderTextColor="silver"
          onChangeText={e => {
            this.setState({message: e});
          }}
        />
        {/* <PlusSquareTwoTone /> */}
        <Icon2.Button
          name="circle-with-plus"
          backgroundColor="rgba(0,0,0,0.0)"
          onPress={this.handler}
          color="white"
        />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddTask);
