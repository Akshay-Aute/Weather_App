import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default  function  WeatherApp(){

    let [weatherInfo,setWeatherInfo]=useState({
    city: "Pune",
    feelsLike: 25,
    humidity: 75,
    temp: 27.2,
    tempMax: 27.2,
    tempMin: 27.2,
    weather: "overcast clouds",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo)
  }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Akshay</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )

}