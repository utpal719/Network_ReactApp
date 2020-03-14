import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from './../../components/Footer/Footer'
import Form from './../../components/Form/Form'
import FloatingBanner from './FloatingBanner/FloatingBanner'
import TopDestinationBanner from './../../components/TopDestinationBanner/TopDestinationBanner'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './Styles';
import CaraouselBanner from './CarouselBanner/CaraouselBanner'
const HomePage = (props)=>{
    const {classes}=props;
    console.log(NavBar);
    return(
        <div className={classes.container}>
             <NavBar/> 
             <Form/> 
             <FloatingBanner/>
             <CaraouselBanner/>
             <TopDestinationBanner/>
             <Footer/> 
        </div>

    );
}

export default withStyles(Styles)(HomePage);