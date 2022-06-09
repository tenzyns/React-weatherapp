import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Search from "./Search";

 const App = () => {

  //the nested nature of the fetched json object necessitate setting initial data for useState, for page rendering to avoid type error in reading nested object values
  const initialData = {
    current_weather: {
      weathercode: "",
      winddirection: "",
      temperature: "",
      time: "",
      windspeed: ""
    },
    daily: {
      time: [],
      precipitation_sum: [],
      weathercode: [],
      temperature_2m_min: [],
      temperature_2m_max: [],
      windspeed_10m_max: []
    }
  }

 

  // const [weatherLike, setWeatherLike] = useState("Checking weather...");
  const [location, setLocation] = useState({lat: 51.507, long: 0.127})
  const [weatherData, setWeatherData] = useState(initialData);
  const [town, setTown] = useState("London");
  const [country, setCountry] = useState("UK")
  const [num, setNum] = useState(""); //this to get the weathercode to be used to decide className for background
  
  const api = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=Europe%2FLondon`
  
//onchange handler
  const searchHandler = (e) => {
    const searchVal = e.target.value;
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchVal}`)
    .then(result => result.json())
    .then(data => {
      setTown(data?.results[0].name);
      setCountry(data?.results[0].country);
      setLocation({
        lat: data?.results[0].latitude,
        long: data?.results[0].longitude
      })
      console.log(location); 
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    async function fetchData() {
    let result = await fetch(api);
    let data = await result.json();
    setWeatherData(data);
    setNum(data.current_weather.weathercode);
    }
    
    fetchData();
  }, [api]);

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     function(position) {
  //         setLocation({
  //           lat: position.coords.latitude,
  //           long: position.coords.longitude,
  //       });
  //       console.log(location);
  //     },
  //     function(error) {
  //         setLocation((location));
  //     });
  // }, []);

  return (
    <div className="app">
      <Search selectTown={searchHandler} />
      <Weather now={
        num === 0 || num === 1 ? "clear" : num === 2? "part-cloud": num === 3 ? "cloudy" : num >=45 && num <= 48 ? "foggy" : num >= 95 ? "thunder" : (num >= 71 && num <= 77) || (num>=85 && num <= 86) ? "snow" : "rain"
      } 
      weather={weatherData} areaName={town} nation={country} />
    </div>
  );
}
export default App;

//edit CSS background and fix classnames