import '../../App.css';
import React from 'react';
import Footer from '../Footer';
import ContactForm from '../ContactForm';
import {Typography, Grid, Container, List, ListItem, ListItemText } from '@material-ui/core';
import   { makeStyles,createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ListItemIcon from "@material-ui/core/ListItemIcon";


const useStyles = makeStyles({
     root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     },
     label:{

     }
})

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function Contact() {
     const classes = useStyles;
     const [dense, setDense] = React.useState(false);
	return (

          
          

		<div className="contact_container">
    <Grid container direction="row"
  justify="center"
  alignItems="center"
  style={{background: '#f2f2f2',
     }}
>

     <Grid item xs={12} sm={6}> 
     <Grid container justify="center" direction="column" alignItems="center">
     <Grid item><Typography gutterBottom > Office Address:</Typography></Grid>
<Grid item>

    <Typography gutterBottom  >C-689, Sarita Vihar, New Delhi 110076</Typography>

</Grid>
<Grid item>
<List dense={dense} style={{alignItems:'center'}}>
               <ListItem >
               <ListItemIcon>
                         <ArrowRightIcon/>
               </ListItemIcon>
                    <ListItemText>

                         <Typography>Get Project's Budget Estimate</Typography>
                    </ListItemText>
               </ListItem>
               <ListItem>
               <ListItemIcon>
                         <ArrowRightIcon/>
               </ListItemIcon>
                    <ListItemText>
                    <Typography >Communicate With Professional Team</Typography>
                    </ListItemText>
               </ListItem>
          </List>
</Grid>
<Grid item> <Typography gutterBottom> Phone Number: 9999004262</Typography></Grid>
     </Grid>


          
    
   

     </Grid>
     <Grid item xs={12} sm={6}  style={{backgroundColor: 'white'}}>
     <Container maxWidth="sm" style={{ padding:'30px' }}>

        
     <ContactForm/>
		
</Container>       
     </Grid>
</Grid>
        
        
            <Footer />
        
        </div>
		

			
	);
}

export default Contact;
