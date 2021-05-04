import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


export default function Chapters () {

  const [ chapNum, setChapNum ] = useState(1)
  const [ number , setNumber ] = useState(1);
  const [ chapter , setChapter ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ searchNum, setSearchNum ] = useState(1)

  const fetchChapter = async (num) => {
    return axios.get(`chapters/${num}`)
      .then(({ data }) => {
      return data
        })
  }

  const searchChapter = (e) => {
    e.stopPropagation()
    setNumber(parseInt(searchNum))
    setChapNum(parseInt(searchNum))
  }

  const handleNext =() => {
    setNumber(number + 1)
    setChapNum(chapNum +  1)
  }  

  const handlePrevious = () => {
    setNumber(number - 1)
    setChapNum(chapNum - 1)
  }

  const handleImage = (img) => {
    console.log(img.includes('|'))
    return img ? img.includes('|') ? img.split('|')[1] : img : null
 //   return img ? img.split('|')[1] : null
  }

  useEffect (() => {
    const handleChapter = (number) => {
      fetchChapter(number).then(data => { 
        setNumber(number)
        setChapter(data) 
        setLoading(false)
      });
    };
      handleChapter(number)
    },[number]);

  return !loading ? (
      
      <div className='container chapter'>
        <div className='search chapter'>
          <Input type="number"
                  onChange={(event) => {
                  setSearchNum(event.target.value)}}
                  placeholder="search Chapter ..." /> 
          <Button disabled={searchNum < 1 || searchNum > 980 ? true : false}
                  onClick={(e) =>{
                  (searchChapter(e))}}
                  variant='contained'>
                  GO
          </Button>
        </div>
        <div className='chapter_container'>
            <img className='chapter_cover' 
              src={handleImage(chapter.cover_images)} 
              alt={chapter.explanation} 
              />
              <div className="description">
                <h3>{chapter.chapter}</h3><br />
                <p><strong> SUMMARY:</strong> {chapter.summary}</p><br />
                <p> <strong>CHARACTERS: </strong> <em>{chapter.characters}</em></p>
              </div>
        </div>
        <div className="buttonSection buttons">
           <div></div>
           <div className='div buttons'> 
                <Button disabled={chapNum === 1? true: false}
                        onClick={() => (handlePrevious())}
                        variant='contained' 
                        color='secondary'>
                        Previous
                </Button>
             <Button disabled={chapNum === 980 ? true: false} 
                        onClick={() => (handleNext())}
                        variant='contained' 
                        color='primary'>
                        Next
                </Button>
           </div>
           <div></div>
        </div>
      </div>
  ) : false
  }
