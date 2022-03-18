
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

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
const User = () => {
  const classes = useStyles();
 const [user,setUser] =useState('')


const handleTextFieldChange = (e) => {
  e.preventDefault();
  setUser(e.target.value)
  
}
const saveUser1 = () => {
  sessionStorage.setItem('user1', user)
  setUser('')
}
const saveUser2 = () => {
  sessionStorage.setItem('user2', user)
  setUser('')
}

  return (
    <>
     <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key={sessionStorage.getItem('user')}>
                        <ListItemIcon>
                        <Avatar alt={sessionStorage.getItem('user')} src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary={sessionStorage.getItem('user')}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px', display:'flex'}}>
                    <TextField 
                    value={user} onChange={handleTextFieldChange}
                    id="outlined-basic-email" label="Enter New User" variant="outlined" fullWidth />
                    <button onClick={saveUser}>ADD</button>
                </Grid>   
            </Grid>
    </>


  );
};

export default User;