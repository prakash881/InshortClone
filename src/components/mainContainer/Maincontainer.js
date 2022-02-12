import {  makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import React from 'react'
import { CardContent } from '@material-ui/core';
import { altimg } from '../imgConfig.js/imgconfig';

// styling 

const useStyles = makeStyles(theme=>({
    
  
  
          mcontainer:{
              width:'75%',
              FlexDirection:'row',
            display:'flex',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                marginTop:'17px',
                borderRadius:'3px',
            
                overflow:'hidden',
                [theme.breakpoints.down("sm")]:{
                  width:'100%',
                  flexDirection:'column',
                  alignItems:'center',
                  overflow:'hidden',
              },
              
            },
            imagecom:{
                
          
            [theme.breakpoints.down("sm")]:{
              width:'70',
              alignItems:'center'
          },
          
          imgsize:{
            borderRadius:'3px', 
            backgroundSize: 'cover',
            overflow:'hidden' , 
            objectFit: 'cover',
            backgroundPosition: 'center',
            paddingTop:'10px',
            [theme.breakpoints.down("xs")]:{
             width:'100%',
             

          },

          },
              
            },

          
            imagecontent:{

              
              [theme.breakpoints.down("sm")]:{
                flexDirection:'column',
                alignItems:'center',
                width:'100%',
                fontSize:'1.3erm'

            },
            



            },
            newsSource:{
              textDecorationStyle:'none',
              color:'black',
              fontWeight:'500'
            
            },
          
            titContent:{
                color:' #44444d',
                fontFamily:'Poppins',
                
                fontWeight:'300',
                [theme.breakpoints.down("xs")]:{
                  width:'100%',
                   
     
               },
              
     
                
            }
        }))


function Maincontainer({title, author,description,url,imgurl,publishedAt,source}) {

 
 // converting the published date  in  normal days/ month/ year & time[pm || am]
 //convert date to timestamp

 const fullDate= new Date(publishedAt)
 
 // now converted into the arry of String 
 var  getDate= fullDate.toString().split(" ") //  splited intot the string 
 // console.log(getDate);
// ['Thu', 'Jul', '22', '2021', '00:47:05', 'GMT-0700', '(Pacific', 'Daylight', 'Time)']
 const hour = parseInt(getDate[4].substring(0, 4)); //
 // console.log(hour)
 const time = hour > 12 ? true : false;
  // console.log(time)
const classes=useStyles();

    return (
   <>
         

<div>

       <Container className={classes.mcontainer}  >
     
         <Grid  className={classes.imagecom}>
            
            <img alt="" src={imgurl?imgurl:`${altimg}`} className={classes.imgsize} style={{ width:'350px', height:'280px'}} />
          
          
          
          </Grid>
                  <CardContent  className={classes.imagecon} xs={12} sm={4}>
                    <Grid className={classes.titContent}>
                   <Typography color='textPrimary' variant='h6'> {title}</Typography>
                   <br />
                    <Typography><span style={{color:'#121211', fontWeight:'600'}}>ShortBy </span>{author} {
                    time ? `${hour - 12}:${getDate[4].substring(3, 5)} pm`
                    : `${hour}:${getDate[4].substring(3, 5)} am`}{" "}
               
              on {getDate[2]} {getDate[1]} {getDate[3]}, {getDate[0]}</Typography> 
                    <Typography>{description} </Typography> 
                    
                   
                    </Grid>
                    <br />
                      
                   
                    <Grid >
                      <span>readmore at <a href={url} className={classes.newsSource}>{source}</a></span>
                    </Grid>
                    
                     </CardContent>

                    </Container>
     </div>
        </>
    )
}

export default Maincontainer
