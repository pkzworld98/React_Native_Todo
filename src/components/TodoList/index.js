import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import TodoItem from '../TodoItem';
import {style} from './stylesheet';

export default class TodoList extends Component {
  TodoList = () => {
    switch (this.props.show) {
      case 'All':
        console.log('all hai');
        return this.props.todos;

      case 'Completed':
        console.log('completed hai');

        return [...this.props.todos.filter(task => task.completed === true)];

      case 'Uncompleted':
        console.log('active  hai');

        return [...this.props.todos.filter(task => task.completed === false)];
    }
  };
  render() {
    console.log(this.props, 'k', this.TodoList());
    const renderItem = ({item}) => {
      return (
        <TodoItem
          data={item}
          action={this.props.action}
          completed={this.props.completed}
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
