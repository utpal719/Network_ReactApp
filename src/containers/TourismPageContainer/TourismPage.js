import React from 'react'
import cover from './ne1.jpg' 
import { withStyles } from '@material-ui/core';
import { Styles } from './Styles';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TourismPageLayout from './TourismPageLayout';
const TourismPage=(props)=>{
    const {classes}=props
    return(
        <div className={classes.div}>
            <NavBar/>
            <img src={cover} alt="image" className={classes.img}></img>
            <TourismPageLayout/>
            <Footer/>
        </div>

    );
}
export default withStyles(Styles)(TourismPage);