import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ADD_MESSAGE } from '../../actions/actionTypes';
import './ChatSpace.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
});
const ChatSpace = (props) => {
  const { addMessage } = props;
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const sender1 = [];
  const sender2 = [];
  const allSenders = [];
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
  }, [messages]);
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    if (message.length >= 0) {
      setIsValid(true);
    }
  };
  const sendMessage = () => {
    const messageobj = {
      id: uuidv4(),
    };
    if (message === '') {
      alert('Enter Message please');
    } else if (localStorage.getItem('sender') == null) {
      alert('Select Sender  please');
    } else if (!JSON.parse(localStorage.getItem('datas'))) {
      const arr = [];
      messageobj.sender = localStorage.getItem('sender');
      messageobj.message = message;
      addMessage(messageobj);
      arr.push(messageobj);
      localStorage.setItem('datas', JSON.stringify(arr));
      setMessage('');
    } else {
      messageobj.sender = localStorage.getItem('sender');
      messageobj.message = message;
      const arr = JSON.parse(localStorage.getItem('datas'));
      arr.push(messageobj);
      addMessage(messageobj);
      localStorage.setItem('datas', JSON.stringify(arr));
      setMessage('');
    }
  };
  if (JSON.parse(localStorage.getItem('datas')) != null) {
    JSON.parse(localStorage.getItem('datas')).map((person) => {
      if (JSON.parse(localStorage.getItem('datas')) != null) {
        allSenders.push(person);
        if (JSON.parse(localStorage.getItem('users')) != null) {
          if (person.sender === JSON.parse(localStorage.getItem('users'))[0]) {
            sender1.push(person);
          } else if (person.sender === JSON.parse(localStorage.getItem('users'))[1]) {
            sender2.push(person);
          }
        }
      }
      return null;
    });
  }
  let user1 = [];
  if (JSON.parse(localStorage.getItem('users'))) {
    user1 = { ...JSON.parse(localStorage.getItem('users')) };
  }
  const classes = useStyles();
  return (
    <Grid item xs={9}>
      <List className={classes.messageArea}>
        <ListItem key="2">
          <Grid container>
            <div className="chat-background">
              {allSenders.map((person) => (
                <div style={{ width: '60%' }} key={person.id}>
                  {person.sender === user1[0]
                    ? (
                      <div>
                        <div style={{
                          width: '300px', margin: '40px', borderRadius: '0px 50px 50px 50px', marginLeft: '300px', padding: '20px', backgroundColor: 'gray',
                        }}
                        >
                          <div style={{
                            width: 'fit-content', height: 'auto', borderRadius: '50%', backgroundColor: 'cyan', padding: '20px',
                          }}
                          >
                            {person.sender}
                          </div>
                          <p style={{ color: 'white' }}>{person.message}</p>
                        </div>
                      </div>
                    )
                    : (
                      <div>
                        <div style={{
                          width: '300px', margin: '40px', borderRadius: '50px 50px 50px 0px', padding: '20px', backgroundColor: 'brown',
                        }}
                        >
                          <div style={{
                            width: 'fit-content', height: 'auto', borderRadius: '50%', backgroundColor: 'pink', padding: '20px',
                          }}
                          >
                            {person.sender}
                          </div>
                          <p style={{ color: 'white' }}>{person.message}</p>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>

          </Grid>
        </ListItem>
      </List>
      <Divider />
      <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
          <TextField id="outlined-basic-email" label="Type Something" value={message} required onChange={handleMessageChange} fullWidth />
        </Grid>
        <Grid xs={1} align="right">
          <Fab color="primary" aria-label="send" disabled={!isValid} onClick={sendMessage}><SendIcon /></Fab>
        </Grid>
      </Grid>
    </Grid>

  );
};

const mapDispatchToProps = {
  addMessage: (message) => ({
    type: ADD_MESSAGE,
    payload: message,
  }),
};

ChatSpace.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ChatSpace);
