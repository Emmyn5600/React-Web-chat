import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

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
})
const ChatSpace = () => {
  const [message, setMessage] = useState("")
  const sender1 = []
  const sender2 = []

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value)

  }
  const sendMessage = () => {
    let messageobj = {}
    if (!JSON.parse(localStorage.getItem('datas'))) {
      const arr = [];
      messageobj.sender = sessionStorage.getItem('sender')
      messageobj.message = message
      arr.push(messageobj)
      localStorage.setItem("datas", JSON.stringify(arr));
      setMessage('')
    }
    else {
      messageobj.sender = sessionStorage.getItem('sender')
      messageobj.message = message
      const arr = JSON.parse(localStorage.getItem('datas'));
      arr.push(messageobj)
      localStorage.setItem("datas", JSON.stringify(arr));
      setMessage('')
    }

  }
if(JSON.parse(localStorage.getItem('datas'))!=null){
  JSON.parse(localStorage.getItem('datas')).map((person) => {

    if (person.sender == JSON.parse(localStorage.getItem('users'))[0]) {
      sender1.push(person)
    }
    else if (person.sender == JSON.parse(localStorage.getItem('users'))[1]) {
      sender2.push(person)
    }
  })}
console.log(sender2, sender1)
  const classes = useStyles();
  return (
    <Grid item xs={9}>
      <List className={classes.messageArea}>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={12}>
              <h1></h1>
              {sender1.map((person, index) => (
                <ListItemText align="right" primary={person.message}></ListItemText>

              ))}

            </Grid>
            <Grid item xs={12}>
              {sender2.map((person, index) => (
                <ListItemText align="left" secondary={person.message}></ListItemText>
              ))}
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider />
      <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
          <TextField id="outlined-basic-email" label="Type Something" value={message} onChange={handleMessageChange} fullWidth />
        </Grid>
        <Grid xs={1} align="right">
          <Fab color="primary" aria-label="add" onClick={sendMessage}><SendIcon /></Fab>
        </Grid>
      </Grid>
    </Grid>


  );
};

export default ChatSpace;
