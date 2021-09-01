import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

import {style} from './stylesheet';

export default class TaskButton extends Component {
  render() {
    const showAll = () => {
      this.props.action('All');
    };
    const showCompleted = () => {
      this.props.action('Completed');
    };
    const showUncompleted = () => {
      this.props.action('Uncompleted');
    };

    return (
      <View style={style.container}>
        <Icon2.Button
          name="grid"
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          onPress={showAll}>
          All
        </Icon2.Button>
        <Icon2.Button
          name="flash"
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          onPress={showUncompleted}>
          Active
        </Icon2.Button>
        <Icon.Button
          name="checksquare"
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          onPress={showCompleted}>
          Completed
        </Icon.Button>
        {/* <Button title="All" onPress={showAll} />
        <Button title="cOMPLETED" onPress={showCompleted} />
        <Button title="active" onPress={showUncompleted} /> */}
      </View>
    );
  }
}
