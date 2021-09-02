import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {style} from './stylesheet';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/AntDesign';
import {changeStatus, deleteTask} from '../../actions/todos';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteTask(id)),
  completedstatus: id => dispatch(changeStatus(id)),
});

class TodoItem extends Component {
  checkBoxHandler = e => {
    this.props.completedstatus(this.props.data.id);
  };
  render() {
    // console.log(this.props.data.msg, ' yei aya', this.state.selected);
    return (
      <View style={style.container}>
        <CheckBox
          checkBoxColor="orange"
          onClick={this.checkBoxHandler}
          isChecked={this.props.data.completed}
        />
        <View style={style.message}>
          <Text
            style={
              !this.props.data.completed
                ? style.completedTask
                : style.uncompletedTask
            }>
            {this.props.data.msg}
          </Text>
        </View>
        <Icon.Button
          name="delete"
          backgroundColor="rgba(0,0,0,0.0)"
          color="white"
          onPress={() => {
            this.props.delete(this.props.data.id);
          }}
        />

        {/* <Button title="delete" onPress={handler} /> */}
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
