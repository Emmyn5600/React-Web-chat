import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chat from './containers/Chat/Chat';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const App = () => {
  const classes = useStyles();

  return (
      <div>
        <Chat /> 
      </div>
  );
}

export default App;
