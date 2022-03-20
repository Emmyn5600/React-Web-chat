import { connect } from 'react-redux';
import ChatSpace from '../component/ChatSpace/ChatSpace';
import { addMessage } from '../actions/actionCreators';

const mapDispatchToProps = (dispatch) => ({
  dispatch: (message, user) => {
    dispatch(addMessage(message, user));
  },
});
/* eslint-disable import/prefer-default-export */
export const AddMessage = connect(() => ({}), mapDispatchToProps)(ChatSpace);
