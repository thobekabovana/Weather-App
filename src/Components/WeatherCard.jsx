import React, { useEffect, useRef, useState } from 'react';

import search_icon from '../assets/icons/search.svg';
import rain_icon from '../assets/icons/rain.png';
import storm_icon from '../assets/icons/storm.png';
import sunny_icon from '../assets/icons/sun.png';
import cloud_icon from '../assets/icons/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
import snow_icon from '../assets/icons/snow.png';
import wind_icon from '../assets/icons/windy.png';


const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(new Date());

  const AllIcons = {
    "01d": sunny_icon,
    "01n": sunny_icon,
    "02d": sunny_icon,
    "02n": sunny_icon,
    "03d": storm_icon,
    "03n": storm_icon,
    "04d": cloud_icon,
    "04n": cloud_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": storm_icon,
    "11n": storm_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    
  };

  

 
  const search = async (city) => {
    if (city === '') {
      alert("Search city or weekday");
      return;
    }
    try {
      const apiKey = import.meta.env.VITE_APP_DAY;
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
      const response = await fetch(url);
      if (!response.ok) {
        const data = await response.json();
        if (data.message === 'city/weekday not found') {
          alert("Please enter the correct city name or valid weekday");
        } else {
          alert("Error fetching data. Please try again.");
        }
        return;
      }
      const data = await response.json();
      const icon = AllIcons[data.weather[0].icon] || sunny_icon; // Default to sunny_icon
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setError("Error fetching the data. Please try again.");
      console.error("Error fetching the data", error);
    }
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  

  useEffect(() => {
    search('Pietermaritzburg');
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!weatherData) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <div className='glassCard bg-slate-400' >
        <h1 className='font-bold tracking-wide text-3xl' >Weather Application</h1>

        <nav className='w-full flex justify-between items-center'>
          <input ref={inputRef} type='text' placeholder='Search' />
          <img src={search_icon} alt='Search' onClick={() => search(inputRef.current.value)} />
        </nav>

        {weatherData && (
          <div className='w-full felx flex-wrap gap-8 py-4 px-[10%] items-center justify-center weather-icon-container' >
            <img src={weatherData.icon} alt='Weather Icon' className='weather-icon' />
            <p className="font-bold text-5xl weather-temperature">{weatherData.temperature}°C</p>
            <p className="font-bold text-center text-xl">{weatherData.location}</p>
            <div className='weather-data'>

            <div className="w-full flex justify-between items-center mt-4">
               <p className="text-center p-2">{time.toLocaleTimeString()}</p>
               <p className="text-center p-2">{time.toDateString()}</p>
            </div>
              
              <div>
              
                <div className='wind-humidity'>
                <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <span className='font-normal' >{weatherData.humidity}</span></p>
                <p  className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'> <span style={{margin: "5%"}}>Wind Speed</span> {weatherData.windSpeed} Km/h</p>
                 
                </div>

              </div>
            </div>
          </div>
        )}
        <div className='footer'>
          {/* <p>&copy; 2024 Asanda Madondo. Weather App. All rights reserved.</p> */}
        </div>
      </div>
    </>
  );
};
export default Weather;