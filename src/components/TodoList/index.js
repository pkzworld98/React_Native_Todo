import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import TodoItem from '../TodoItem';
import {style} from './stylesheet';

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todos.tasks,
  show: state.todos.show,
});

class TodoList extends Component {
  TodoList = () => {
    switch (this.props.show) {
      case 'All':
        return this.props.todos;

      case 'Completed':
        console.log('completed hai');

        return [...this.props.todos.filter(task => task.completed === true)];

      case 'Active':
        console.log('active  hai');

        return [...this.props.todos.filter(task => task.completed === false)];
    }
  };
  render() {
    console.log(this.props.todos, 'kes', this.TodoList());
    const renderItem = ({item}) => {
      return (
        <TodoItem
          data={item}
          // action={this.props.action}
          // completed={this.props.completed}
        />
      );
    };
    return (
      <View style={style.container}>
        <FlatList
          data={this.TodoList()}
          renderItem={renderItem}
          keyExtractor={this.props.todos.id}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(TodoList);
