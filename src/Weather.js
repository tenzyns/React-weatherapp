import React from "react";

const Weather = (props) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = new Date();
    const dayNum = today.getDay();
    const day = weekday[dayNum];
    const monthNum = today.getMonth();
    const month = monthName[monthNum];
    const dateToday = today.getDate();
    const year = today.getFullYear();

    const weatherCodes = {
        "0": "Clear sky",
        "1": "Mainly clear",
        "2": "Partly cloudy",
        "3": "Overcast",
        "45": "Fog",
        "48": "Rime fog",
        "51": "Light drizzle",
        "53": "Moderate drizzle",
        "55": "Dense drizzle",
        "56": "Freezing drizzle",
        "57": "Freezing dense drizzle",
        "61": "Slight rain",
        "63": "Moderate rain",
        "65": "Heavy rain",
        "66": "Light freezing rain",
        "67": "Heavy freezing rain",
        "71": "Slight snow fall",
        "73": "Moderate snow",
        "75": "Heavy snow",
        "77": "Snow grains",
        "80": "Slight rain shower",
        "81": "Moderate rain shower",
        "82": "Violent rain shower",
        "85": "Slight snow shower",
        "86": "Heavy snow shower",
        "95": "Slight thunderstorm",
        "96": "Thunderstorm with slight hail",
        "99": "Thunderstorm with heavy hail"
      }
    return (
    <div>
        <div className="box" >
            <div className="city">
                <h3>{props.areaName}, {props.nation} </h3>
                <h3>{day+","} {dateToday} {month} {year} </h3>
            </div>
            <div className={`today ${props.now}`}>
                <h2>Currently feels like</h2>
                <h3>{props.weather.current_weather.temperature}℃ </h3>
                <h3>{weatherCodes[props.weather.current_weather.weathercode]}</h3>
            </div>
        </div>
        <div className="table-container">
            <table>
                <caption>4 days forecast</caption>
                <thead>
                    <tr>
                    <th>Day</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Precip</th>
                    <th>Wind</th>
                    <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>{weekday[(new Date(props.weather.daily.time[0])).getDay()]}</td>
                        <td>{props.weather.daily.temperature_2m_min[0]}° </td>
                        <td>{props.weather.daily.temperature_2m_max[0]}°</td>
                        <td>{props.weather.daily.precipitation_sum[0]}mm</td>
                        <td>{props.weather.daily.windspeed_10m_max[0]}km/h</td>
                        <td>{weatherCodes[props.weather.daily.weathercode[0]]} </td>
                    </tr>
                    <tr>
                    <td>{weekday[(new Date(props.weather.daily.time[1])).getDay()]}</td>
                        <td>{props.weather.daily.temperature_2m_min[1]}° </td>
                        <td>{props.weather.daily.temperature_2m_max[1]}°</td>
                        <td>{props.weather.daily.precipitation_sum[1]}mm</td>
                        <td>{props.weather.daily.windspeed_10m_max[1]}km/h</td>
                        <td>{weatherCodes[props.weather.daily.weathercode[1]]} </td>
                    </tr>
                    <tr>
                    <td>{weekday[(new Date(props.weather.daily.time[2])).getDay()]}</td>
                        <td>{props.weather.daily.temperature_2m_min[2]}° </td>
                        <td>{props.weather.daily.temperature_2m_max[2]}°</td>
                        <td>{props.weather.daily.precipitation_sum[2]}mm</td>
                        <td>{props.weather.daily.windspeed_10m_max[2]}km/h</td>
                        <td>{weatherCodes[props.weather.daily.weathercode[2]]} </td>
                    </tr>
                    <tr>
                    <td>{weekday[(new Date(props.weather.daily.time[3])).getDay()]}</td>
                        <td>{props.weather.daily.temperature_2m_min[3]}° </td>
                        <td>{props.weather.daily.temperature_2m_max[3]}°</td>
                        <td>{props.weather.daily.precipitation_sum[3]}mm</td>
                        <td>{props.weather.daily.windspeed_10m_max[3]}km/h</td>
                        <td>{weatherCodes[props.weather.daily.weathercode[3]]} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);
}

export default Weather;

