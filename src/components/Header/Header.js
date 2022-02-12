import React from 'react'
import {makeStyles} from "@material-ui/core"
import { imgpx } from '../imgConfig.js/imgconfig';
import Navbar from './sidebar/Navbar';
// import { Height } from '@material-ui/icons';
const useStyles=makeStyles({

    Header:{
        backgroundColor:'#fbfced',
      
       display:'flex',
       top:'0',
       position:'fixed',
    boxShadow:'0px 1px 8px #818271',
        color:'white',
       width:'100%',  
        zIndex:'100',
        left:'0',
        right:'0'
    },  
    bar:{
      flex:'0.48',
      display:'flex'
        
    }

    
})

const Header =({setcategory})=> {

    const classes= useStyles();

    return (
        
        <div className={classes.Header} xs={12} sm={6}>
      <span className={classes.bar}>  <Navbar setcategory={setcategory}/></span>
         <span className={classes.himage}>   <img src={`${imgpx}`} alt={`inshortLogo`} style={{width:'100px', height :'65px'}} /> </span>
          
        </div>
         
         
    )
}

export default Header;
