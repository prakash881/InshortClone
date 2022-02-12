import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { catogaories } from '../../Catogaries/catog';
import {  Typography } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
   paddingTop:'40px',
  
  },

  fullList: {
    width: 'auto',
   
  },
});

export default function Navbar({setcategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
   
    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <Typography> Catogaries</Typography>
      <Divider />
      <List>
       
        {catogaories.map((text, index) => (
          <ListItem button key={text} onClick={()=>{
            setcategory(text);
            window.scrollTo({ behavior: 'smooth', top: '0px' });
          }

             }>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
    
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
         
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
           
            {list(anchor)}
           
          </SwipeableDrawer>
         
        </React.Fragment>
      ))}
    </div>
  );
}