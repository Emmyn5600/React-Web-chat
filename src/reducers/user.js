import { CREATE_USER, USERS_LIST } from '../actions/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.payload];

    case USERS_LIST:
      return action.payload;

    default:
      return state;
  }
};

export default users;
