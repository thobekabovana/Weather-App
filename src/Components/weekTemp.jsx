import React, { useEffect, useState } from 'react'

import search_icon from '../assets/icons/search.svg';
import rain_icon from '../assets/icons/rain.png';
import storm_icon from '../assets/icons/storm.png';
import sunny_icon from '../assets/icons/sun.png';
import cloud_icon from '../assets/icons/cloud.png';
import snow_icon from '../assets/icons/snow.png';
import wind_icon from '../assets/icons/windy.png';

 const MiniCards = ({time, temp,}) => {

const [icon, setIcon] = useState()

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

//   const data = await response.json();
//       const icon = AllIcons[data.weather[0].icon] || sunny_icon; // Default to sunny_icon
//       setWeatherData({
//         humidity: data.main.humidity,
//         windSpeed: data.wind.speed,
//         temperature: Math.floor(data.main.temp),
//         location: data.name,
//         icon: icon,
//       });
//     } catch (error) {
//       setError("Error fetching the data. Please try again.");
//       console.error("Error fetching the data", error);
//     }
//   };


  return (
    <div className='glassCard w-[10rem] p-2 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeSpring('en', {weekday: 'long'}).split("")[0]}
      </p>

      <hr></hr>

      <div className='w-full flex justify-center items-center flex-1 '>
       <img src={icon} alt='weather' className='w-[4rem] h-[4rem]'/>
      </div>

      <p className='text-center font-bold'>{temp}&deg;C</p>
      
    </div>
  )
}
export default MiniCards