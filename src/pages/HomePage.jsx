import React from 'react'
import BodyComponent from '../components/BodyComponent'
import HeroComponent from '../components/HeroComponent';

function HomePage() {

  return (

    <div className='home'>
      <HeroComponent/>
      <BodyComponent/>
      
    </div>
  )
}

export default HomePage;
