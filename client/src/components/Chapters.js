import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function Chapters () {

  const [ number , setNumber ] = useState(1);
  const [ chapter , setChapter ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ chapters, setChapters ] = useState([]) 

  const fetchChapter = async (num) => {
    return axios.get(`chapters/${num}`)
      .then(({ data }) => {
      return data
        })
  }

  const handleChapter = (number) => {
    fetchChapter(number).then(data => { 
      setNumber(number )
      setChapter(data) 
      setLoading(false)
      setChapters([data])
    })
  }


  const handleNext =() => {
    setNumber(number + 1)
    fetchChapter(number + 1).then(data => {
    setChapter(data)
    setChapters([data, ...chapters])
    setLoading(false)
     console.log(chapter) 
    })
  }  

  const handlePrevious = () => {
    setNumber(number - 1)
    fetchChapter(number - 1).then(data => {
    setChapter(data)
    setChapters([data, ...chapters])
    })
  }

  const handleImage = (img) => {
    return img.split('|')[0]
  }

  useEffect (() => {
    handleChapter(number)
    },[]);

  console.log('chapters',chapters.length)
  return !loading ? (
      <div>
        <Button onClick={() => (handlePrevious())} variant='contained' color='primary'>Previous</Button>
        <Button onClick={() => (handleNext())} variant='contained' color='secondary'>Next</Button>
        <img className='cover' src={handleImage(chapter.cover_images)} alt={chapter.id} />
        <p>{chapter.summary}</p>
      </div>
  ) : false
  }