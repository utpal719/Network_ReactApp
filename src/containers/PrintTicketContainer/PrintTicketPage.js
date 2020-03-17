import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from './../../components/Footer/Footer'
import PrintTicketForm from './PrintTicketForm'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
const PrintTicketPage = (props)=>{
    const {classes}=props;
    console.log(NavBar);
    return(
        <div className={classes.bg}>
             <NavBar/> 
             <PrintTicketForm/> 
             <Footer/> 
        </div>

    );
}

export default withStyles(Styles)(PrintTicketPage);