import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button  from '@material-ui/core/Button'

export default function Covers() {
  const [ page, setPage ] = useState(1)
  const [ chapters, setChapters ] = useState([])
  const [ count, setCount ]   = useState([1,2,3,4,5,6,7,8,9,10])
  const [ loading, setLoading ] = useState(true)  
  const [ len , setLen ] = useState(1)
  const [ chapter, setChapter ] = useState([])
  const [ condition, setCondition ] = useState(true)

  const getTenChapter = async (i) => {
    setChapter([])
    setLoading(true)
    return await axios.get(`chapters/${i}`)
      .then(({data}) => {
        chapter.push(data)
        setLen(len + 1)
        if(chapter.length >= 10){
          let sorted =  chapter.sort((a , b) => {
            return a.id - b.id
          }) 
          setLen(10)
          setChapters(sorted)
          setLoading(false)
          console.log(chapters)
        }
      })
  }

  const renderPage = (numArr) => {
    Promise.all(numArr.map( id => getTenChapter(id)))
  }


  const nextPage = () => {
    setPage(page + 1)
    setChapters([])
    setChapter([])
    renderPage(count.map(x => x + 10))
    setCount(count.map(x => x + 10))
  }

  const prevPage = () => {
    setPage(page - 1)
    setChapters([])
    setChapter([])
    renderPage(count.map(x => x - 10))
    setCount(count.map(x => x - 10))
  }

  useEffect(() => {
    renderPage(count)
  },[]);


  const handleImage = (img) => {
    return img ? img.split('|')[1] : undefined
  }


  const isTrue = () => {
   return chapters.map(chapter => (
     <div className='chapters' style={{ marginTop:'auto', marginBottom:'auto'}} key={chapter.id}>
          <p>{chapter.id}</p>
          <img src={handleImage(chapter.cover_images)} alt={chapter.id} />
        </div>
      
      ))
  }
  if(page === 1){
  } else {
    console.log('page', page)
  }
  return  (
    <div className="covers">
      <div style={{position: 'fixed'}}>
      <Button variant='contained'
        style={ page === 1 ? {display: 'none'} : {}}
              color='secondary'
              onClick={() => { prevPage() }}>
              Previous
      </Button>

      <Button variant='contained'
              color='primary' 
              onClick={() => { nextPage() }}>
              Next
      </Button>
      </div >
      <div className='cover_container'>
      {
        !loading && len >= 10 ? (isTrue()): <h1>Loading ...</h1>
      }
      </div>
    </div>
  ) 
}

