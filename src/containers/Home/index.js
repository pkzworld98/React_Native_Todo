import React, {Component} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import TodoInput from '../../components/AddTask/index.js';
import style from './stylesheet.js';
import cuid from 'cuid';
import TodoList from '../../components/TodoList/index.js';
import TaskButton from '../../components/TaskButton/index.js';
import store from '../../store.js';

export default class Home extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     message: '',
  //     todos: [],
  //     show: 'All',
  //   };
  //   console.warn(this.state.todos);
  // }

  // handler = e => {
  //   const task = {
  //     message: this.state.message,
  //     id: cuid(),
  //     completed: false,
  //   };

  //   this.setState(prevState => ({
  //     todos: [...prevState.todos, task],
  //   }));
  // };

  // textChange = e => {
  //   this.setState({
  //     message: e,
  //   });
  // };
  // deleteTask = e => {
  //   this.setState({
  //     ...this.state,
  //     todos: [...this.state.todos.filter(item => item.id !== e)],
  //   });
  // };

  // completeOrnot = e => {
  //   this.setState({
  //     ...this.state,
  //     todos: this.state.todos.map(task =>
  //       task.id === e.id ? {...task, completed: !e.completed} : task,
  //     ),
  //   });
  // };
  // changeShowType = e => {
  //   this.setState({
  //     ...this.state,
  //     show: e,
  //   });
  // };
  // clear = () => {
  //   this.setState({
  //     message: '',
  //   });
  // };
  render() {
    // console.log(this.state, 'k');
    return (
      <View style={style.container}>
        <Text style={style.header}>Todos</Text>

        <TodoInput
        // store={store}
        // onChange={this.textChange}
        // message={this.state.message}
        // press={this.handler}
        // clear={this.clear}
        />
        <TodoList
        // store={store}
        // show={this.state.show}
        // todos={this.state.todos}
        // action={this.deleteTask}
        // completed={this.completeOrnot}
        />
        <TaskButton
        // store={store}
        // action={this.changeShowType}
        />
      </View>
    );
  }
}
