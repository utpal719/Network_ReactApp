import React from 'react'
import Slider from 'infinite-react-carousel'
import { withStyles } from '@material-ui/core'
import { Styles } from './Styles'
import A from './A.png'
import B from './B.png'
import C from './C.png'
const Carousel=(props)=>{
    const {classes}=props;
    return(
        <div className={classes.carousel}>
            <Slider>
                <div>
                    <img src={A} alt="IMAGE ONE"/>
                </div>
                <div>
                    <img src={B} alt="IMAGE TWO"/>
                </div>
                <div>
                    <img src={C} alt="IMAGE THREE"/>
                </div>
            </Slider>
        </div>

    );
}
export default withStyles(Styles)(Carousel);