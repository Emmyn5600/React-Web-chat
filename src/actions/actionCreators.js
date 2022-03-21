import {
  ADD_MESSAGE,
} from './actionTypes';

export const addMessage = (user, message) => ({
  type: ADD_MESSAGE,
  message,
  user,
});
export const addUser = () => ({
});
