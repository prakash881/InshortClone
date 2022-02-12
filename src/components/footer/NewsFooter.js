import React from 'react'
import { imgpx } from '../imgConfig.js/imgconfig';
import { makeStyles,Container, Grid, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles=makeStyles((theme)=>({
    foter:{
        width:"100%",
       display:'flex',
      
        background:'#1c1c1b',
    },
    conntiner:{
        width:'75%',
        display:'flex',

        flexDirection:'row',
        color:'white',
        fontFamily:'sans-serif',
        paddingTop :'20px',
        paddingBottom:'20px',
        [theme.breakpoints.down("sm")]:{
   
            display:'block',
            
        
          }
    },
    copyright:{
        width:'40%',
        display:'flex',
        flexDirection:'row',
        [theme.breakpoints.down("md")]:{
           width:'50%',
            flexDirection:'row',
            alignItems:'center',
            
        
          },
          [theme.breakpoints.only("xs")]:{
           
            flexDirection:'column',
            alignItems:'center',
            
        
          }
       
    },
    SocialMedia:{
        width:'70%',
        paddingTop :'20px',
        paddingBottom:'20px',
        display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  justifyItems:'flex-end',
  alignItems: 'flex-end',
  [theme.breakpoints.between("md")]:{
   
    flexDirection:'column',
    justifyContent: 'left',
    

  }
    },
   
}))
function NewsFooter() {
    const classes= useStyles();


    return (
        <>
       
        <div className={classes.foter}>
        <Container className={classes.conntiner}>      
                    <Grid  className={classes.copyright}>
                      
                        <span>
                        <img src={`${imgpx}`} alt={`inshortLogo`} style={{width:'100px', height :'65px'}} />
                        <Typography>Inshort Clone  Made by Chandra Pant</Typography>
                        </span>
                       
                            
                             <hr style={{width:'0',height:'90px' , marginRight:'10px'}}/>
                             
                            <Typography ><a style={{color:'white', fontSize:'1.5em'}} href="https://www.linkedin.com/company/news-in-shorts/">Contact_US</a> <br />Term and condition privicy policy</Typography>
                               
                           
                           
                             </Grid>

                
                <Grid className={classes.SocialMedia}> 
                  <span>
                <a href="https://www.facebook.com/inshortsapp"><FacebookIcon /> </a> 
                <a href="https://twitter.com/inshorts" > <TwitterIcon /> </a> 
                <a href="https://www.linkedin.com/company/news-in-shorts/" ><LinkedInIcon /> </a> 
                </span>
                </Grid>
                </Container>   
        </div>
     
        </>
    )
}

export default NewsFooter;
