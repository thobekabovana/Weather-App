import React from 'react'
import MyImage from '../assets/MyImage.png'

export default function NoPage() {
  return (
    <div>
      <h1>Sorry Page not found</h1>
      <img src={MyImage} alt="My Image" />
    </div>
  )
}