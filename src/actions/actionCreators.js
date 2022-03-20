import {
  ADD_MESSAGE,
  USERS_LIST,
  RECEIVE_MESSAGE,
} from './actionTypes';

export const addMessage = (user, message) => ({
  type: ADD_MESSAGE,
  message,
  user,
});

export const receiveMessage = (user, message) => ({
  type: RECEIVE_MESSAGE,
  message,
  user,
});

export const userList = (users) => ({
  type: USERS_LIST,
  payload: users,
});
