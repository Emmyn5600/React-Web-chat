import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import './ChatSpace.css'

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
  const allSenders = []
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value)

  }
  const sendMessage = () => {
    let messageobj = {}
    if (!JSON.parse(localStorage.getItem('datas'))) {
      const arr = [];
      messageobj.sender = localStorage.getItem('sender')
      messageobj.message = message
      arr.push(messageobj)
      localStorage.setItem("datas", JSON.stringify(arr));
      setMessage('')
    }
    else {
      messageobj.sender = localStorage.getItem('sender')
      messageobj.message = message
      const arr = JSON.parse(localStorage.getItem('datas'));
      arr.push(messageobj)
      localStorage.setItem("datas", JSON.stringify(arr));
      setMessage('')
    }

  }
  if (JSON.parse(localStorage.getItem('datas')) != null) {
    JSON.parse(localStorage.getItem('datas')).map((person) => {
      if (JSON.parse(localStorage.getItem('datas')) != null) {
        allSenders.push(person)
        if (JSON.parse(localStorage.getItem('users')) != null) {
          if (person.sender == JSON.parse(localStorage.getItem('users'))[0]) {
            sender1.push(person)
          }
          else if (person.sender == JSON.parse(localStorage.getItem('users'))[1]) {
            sender2.push(person)
          }
        }
      }
    })

  }
  const classes = useStyles();
  return (
    <Grid item xs={9}>
      <List className={classes.messageArea}>
        <ListItem key="2">
          <Grid container>
            <div className="chat-background">
              {allSenders.map((person, index) => (
                <div style={{ width: '60%' }}>
                  {person.sender == JSON.parse(localStorage.getItem('users'))[0] ?
                    <div>
                      <div style={{ width: '300px', margin: "40px", borderRadius: "0px 50px 50px 50px", marginLeft: '300px', padding: '20px', backgroundColor: 'gray' }}>
                        <div style={{ width: "fit-content", height: "auto", borderRadius: "50%", backgroundColor: 'cyan', padding: '20px' }}>{person.sender}</div><p style={{ color: 'white' }}>{person.message}</p></div></div> :
                    <div>
                      <div style={{ width: '300px', margin: "40px", borderRadius: "50px 50px 50px 0px", padding: '20px', backgroundColor: 'brown' }}>
                        <div style={{ width: "fit-content", height: "auto", borderRadius: "50%", backgroundColor: 'pink', padding: '20px' }}>{person.sender}</div><p style={{ color: 'white' }}>{person.message}</p></div></div>}
                </div>
              )
              )
              }
            </div>


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
