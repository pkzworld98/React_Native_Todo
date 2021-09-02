import cuid from 'cuid';
import {ADD_TASK, CHANGE_STATUS, CHANGE_VIEW, DELETE_TASK} from './types';

export const addTask = message => {
  // console.log('message', message);
  return dispatch => {
    const task = {
      id: cuid(),
      msg: message,
      completed: false,
      createdAt: new Date(),
    };
    dispatch({
      type: ADD_TASK,
      task,
    });
  };
};

export const deleteTask = id => {
  return dispatch => {
    dispatch({
      type: DELETE_TASK,
      id,
    });
  };
};

export const changeView = view => {
  return dispatch => {
    dispatch({
      type: CHANGE_VIEW,
      view,
    });
  };
};

export const changeStatus = id => {
  console.log('ghusa', id);
  return dispatch => {
    dispatch({
      type: CHANGE_STATUS,
      id,
    });
  };
};
