import React from 'react'
import mainCover from '../cover/cover.png'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <img className='cover' src={mainCover} alt='cover' />
      </div>
      <div className='summary'>
        <p>
          The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.
        </p>
      </div>
      <footer>
        <h3>logo</h3>
      </footer>
    </div>
  );
}

export default Home;
