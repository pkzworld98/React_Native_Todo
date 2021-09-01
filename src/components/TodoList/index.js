import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import TodoItem from '../TodoItem';
import {style} from './stylesheet';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    switch (this.props.show) {
      case 'All':
        this.setState({
          data: [...this.props.todos],
        });
        break;
      case 'Completed':
        this.setState({
          data: [...this.props.todos.filter(task => task.completed === true)],
        });
        break;
      case 'Uncompleted':
        this.setState({
          data: [...this.props.todos.filter(task => task.completed !== true)],
        });
    }
    console.log(this.props.todos);

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
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={this.props.todos.id}
        />
      </View>
    );
  }
}
