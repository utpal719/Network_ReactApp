import React, { useState } from 'react'
import {axios} from 'axios'
const CityList=()=>{
    const [cities,setCities]=useState();
    axios.get('/city/getAllCityName').then(res=>{
        const city=res.data;
        setCities(city);
    });
        return(
            <div>
            {cities}
            </div>
        );
}
export default CityList;