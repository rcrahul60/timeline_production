import React from 'react';
import '../App.css';
import WorkProcessCard from './WorkProcessCard';
import './WorkProcess.css';
import { Container, Grid, makeStyles, Paper, Typography, useMediaQuery,useTheme } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VideocamIcon from '@material-ui/icons/Videocam';
import MovieIcon from '@material-ui/icons/Movie';
import LaptopIcon from '@material-ui/icons/Laptop';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#ffffff',
      padding:'4em'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      //color: theme.palette.text.secondarVideocamIcony,
      backgroundColor:'#f0f0f0',
     // margin:'10px',
     // maxWidth:'15%',
      borderRadius:'7px',
      boxShadow:'5px 5px dodgerblue'

    },

  }));

function WorkProcess(){
    const theme = useTheme();
  //  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));


    const classes = useStyles();
    return (
        <div className={classes.root}>



                    <Grid container spacing={2} >
                    <Grid item md={12}>
                    <h1>Work Process</h1>
                    <Typography className="work_title">To make life of our clients easier, we have developed a comprehensive workflow.</Typography>

                        </Grid>
                    <Grid item sm={12} md={2}  >
                       <Paper
                       className={classes.paper}> <EmojiObjectsIcon fontSize="large"/>
                        <Typography variant="h5">Get Ideas</Typography>
                        <Typography>Every Project start with great idea and good motivation</Typography></Paper>

                    </Grid>
                    <Grid item sm={12} md={2} >
                       <Paper className={classes.paper}>
                       <QuestionAnswerIcon fontSize="large"/>
                    <Typography variant="h5">Discuss</Typography>
                        <Typography>Your inputs are most valuable asset for success.</Typography>
                       </Paper>

                    </Grid>
                    <Grid item sm={12} md={2} >
                    <Paper className={classes.paper}>
                    <AssignmentIcon fontSize="large"/>
                    <Typography variant="h5">Make Plan</Typography>
                        <Typography>An thoughtful execution plan ensures timely delivery.</Typography>
                    </Paper>

                    </Grid>
                    <Grid item sm={12} md={2} >
                       <Paper className={classes.paper}>
                       <MovieIcon fontSize="large" />
                    <Typography variant="h5">Production</Typography>
                        <Typography>Lights Camera Action!!! All the magic happens here.</Typography>
                       </Paper>

                    </Grid>
                    <Grid item sm={12} md={2} >
                        <Paper className={classes.paper}>
                        <LaptopIcon fontSize="large" />
                    <Typography variant="h5">Post Production</Typography>
                        <Typography>Where everything is creatively stitched together.</Typography>
                        </Paper>

                    </Grid>
                    <Grid item sm={12} md={2} >
                        <Paper className={classes.paper}>
                        <ThumbUpIcon fontSize="large"/>
                    <Typography variant="h5">Approval</Typography>
                        <Typography>Your approval really means a lot for our entire team.</Typography>

                        </Paper>
                    </Grid>


            </Grid>

        </div>
    )
}

export default WorkProcess