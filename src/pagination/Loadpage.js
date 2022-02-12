import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
   paddingTop:'20px',
   paddingBottom:'20px',
    
  },
  button:{
    padding :"8px 8px 8px 8px",
    backgroundColor:'#f0e5df',
    border:'1px solid gray',
    '&:hover': {
      
      color:'#f26913'
    },
  }
}));

const Loadpage=({setloadmore,loadmore , totalResults})=> {


  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      { 
      // condition applied here the data getting from  the third party  api  which consist the Array  of [38 || 40] only loadmore appeared when data is loadmore is less then newsresult
      // expression should be true  
      loadmore <= totalResults && (
       <>
      <button className={classes.button} onClick={()=> setloadmore(loadmore + 20)}> Loadmore </button>
      </> 
      )}
    </div>
  );
}

export default Loadpage