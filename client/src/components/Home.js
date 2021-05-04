import React from 'react'
import mainCover from '../cover/cover.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import {IconButton} from '@material-ui/core'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <img className='maincover' src={mainCover} alt='cover' />
      </div>
      <div className='plot'>
        <p>
          The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.
        </p>
      </div>
      <footer >
        <IconButton>
          <a href='https://github.com/meowchii19/OP-Summary'
            target='_blank'
            rel='noreferrer'>
          <GitHubIcon className='github'/>
          </a>
        </IconButton>

      </footer>
    </div>
  );
}

export default Home;
