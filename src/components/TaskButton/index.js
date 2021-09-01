import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class TaskButton extends Component {
  render() {
    const showAll = () => {
      this.props.action('All');
    };
    const showCompleted = () => {
      this.props.action("Completed'");
    };
    const showUncompleted = () => {
      this.props.action('Uncompleted');
    };

    return (
      <View>
        <Button title="Show All Task" onPress={showAll} />
        <Button title="Show Completed Task" onPress={showCompleted} />
        <Button title="Show Uncompleted Task" onPress={showUncompleted} />
        <Button title="showAll" />
      </View>
    );
  }
}
