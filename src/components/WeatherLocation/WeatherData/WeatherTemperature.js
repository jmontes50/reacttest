import React from 'react';
import WeatherIcons from 'react-weathericons';
const WeatherT = ({temperature})=>{
    return (<div>
        <WeatherIcons name={'day-sunny'} size={'4x'}/>
        {temperature} T
        </div>)
}

export default WeatherT;