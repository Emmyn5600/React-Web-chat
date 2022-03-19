
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
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
}));


const User = () => {
const classes = useStyles();
 const [user,setUser] =useState('')
 const [sender,setSender] =useState('')


const handleTextFieldChange = (e) => {
  e.preventDefault();
  setUser(e.target.value)
  
}
const saveUser = () => {

  if (!JSON.parse(localStorage.getItem('users'))) {
    const arr = [];
    arr.push(user)
    localStorage.setItem("users", JSON.stringify(arr));
    setUser('')
  }
  else if(JSON.parse(localStorage.getItem('users')).length==1) {
    const arr = JSON.parse(localStorage.getItem('users'));
    arr.push(user)
    localStorage.setItem("users", JSON.stringify(arr));
    setUsers('')
  }
  else{
    alert("Maximum number of user exceeded")
  }
}
const [open, setOpen] = React.useState(false);

const handleChange = (event) => {
  setSender(event.target.value);
  localStorage.setItem("sender", sender);
};

const handleClose = () => {
  setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
};

  return (
    <>
     <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key={localStorage.getItem('sender')}>
                        <ListItemIcon>
                        <Avatar alt={localStorage.getItem('sender')} src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary={localStorage.getItem('sender')}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px', display:'flex'}}>
                    <TextField 
                    value={user} onChange={handleTextFieldChange}
                    id="outlined-basic-email" label="Enter New User" variant="outlined" fullWidth />
                    <button onClick={saveUser}>ADD</button>
              
                </Grid>   

                {JSON.parse(localStorage.getItem('users'))!=null?
                <div>
                  
      <Button className={classes.button} onClick={handleOpen}>
        Select Sender
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select User</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sender}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          <MenuItem value={JSON.parse(localStorage.getItem('users'))[1]}>{JSON.parse(localStorage.getItem('users'))[0]}</MenuItem>
          <MenuItem value={JSON.parse(localStorage.getItem('users'))[0]}>{JSON.parse(localStorage.getItem('users'))[1]}</MenuItem>
        </Select>
      </FormControl>
    </div>: null}
            </Grid>

    </>


  );
};

export default User;