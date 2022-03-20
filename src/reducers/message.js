import { ADD_MESSAGE, RECEIVE_MESSAGE } from '../actions/actionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];

    case RECEIVE_MESSAGE:
      return state.concat([
        {
          message: action.message,
          user: action.user,
        },
      ]);
    default:
      return state;
  }
};

export default messages;
