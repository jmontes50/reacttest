import React from 'react';
import WeatherEI from './WeatherExtraInfo';
import WeatherT from './WeatherTemperature';

const WeatherData = ()=>{
    return (<div>
        
        <WeatherT temperature={20}></WeatherT>
        <WeatherEI humidity={20} wind={20}></WeatherEI>
    </div>)
}


export default WeatherData;