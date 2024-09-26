import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import MiniCards from './weekTemp';


export default function Home() {

  return (
    <>
   
    <nav>
      <h1>
    Weather App
  </h1>
  </nav>

  <main className='w-full felx flex-wrap gap-8 py-4 px-[10%] items-center justify-center'> 
            <div>
               <WeatherCard/>
            </div>

           
              

           </main>
 
   

    </>
  )
}
