import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {changeView} from '../../actions/todos';

import {style} from './stylesheet';

const mapDispatchToProps = dispatch => {
  return {
    viewType: view => dispatch(changeView(view)),
  };
};
class TaskButton extends Component {
  render() {
    // const showAll = () => {
    //   this.props.action('All');
    // };
    // const showCompleted = () => {
    //   this.props.action('Completed');
    // };
    // const showUncompleted = () => {
    //   this.props.action('Uncompleted');
    // };

    return (
      <View style={style.container}>
        <Icon2.Button
          name="grid"
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          size={25}
          onPress={() => {
            this.props.viewType('All');
          }}>
          <Text>All</Text>
        </Icon2.Button>
        <Icon2.Button
          name="flash"
          size={25}
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          onPress={() => {
            this.props.viewType('Active');
          }}>
          <Text> Active</Text>
        </Icon2.Button>
        <Icon.Button
          name="checksquare"
          size={22}
          backgroundColor="rgba(0,0,0,0.0)"
          color="orange"
          onPress={() => {
            this.props.viewType('Completed');
          }}>
          <Text> Completed</Text>
        </Icon.Button>
        {/* <Button title="All" onPress={showAll} />
        <Button title="cOMPLETED" onPress={showCompleted} />
        <Button title="active" onPress={showUncompleted} /> */}
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(TaskButton);
