import {
  ADD_TASK,
  CHANGE_VIEW,
  DELETE_TASK,
  CHANGE_STATUS,
} from '../actions/types';

const initialState = {
  tasks: [],
  show: 'All',
};

export const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case CHANGE_VIEW:
      return {
        ...state,
        show: action.view,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(item => item.id !== action.id)],
      };
    case CHANGE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? {...task, completed: !task.completed} : task,
        ),
      };
    default:
      return state;
  }
};
