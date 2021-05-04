import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button  from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

export default function Covers() {
  const [ page, setPage ] = useState(1)
  const [ chapters, setChapters ] = useState([])
  const [ chapter, setChapter ] = useState([])
  const [ count, setCount ]   = useState([1,2,3,4,5,6,7,8,9,10])
  const [ loading, setLoading ] = useState(true)  
  const [ len , setLen ] = useState(1)
  const [ pageNum, setPageNum ] = useState(0)

  const gotoPage = () => {
    const baseArr = [1,2,3,4,5,6,7,8,9,10]
    setCount(baseArr.map(x => x + (pageNum -1 ) * 10))
  }

  const nextPage = () => {
    setCount(count.map(x => x + 10))
  }

  const prevPage = () => {
    setCount(count.map(x => x - 10))
  }

  useEffect(() => {

  const getTenChapter = async (i) => {
    setPage((Math.max(...count)/10))
    setChapter([])
    setLoading(true)
    return await axios.get(`covers/${i}`)
      .then(({data}) => {
        chapter.push(data)
        if(chapter.length >= 10){
          let sorted =  chapter.sort((a , b) => {
            return a.id - b.id
          }) 
          setLen(10)
          setChapters(sorted)
          console.log(chapters)
          setLoading(false)
        }
      })
  }
  const renderPage = (count) => {
    Promise.all(count.map( id => getTenChapter(id)))
  }
    console.log(count)
    renderPage(count)
  },[count]);//eslint-disable-line react-hooks/exhaustive-deps


  const handleImage = (img) => {
    return img? img.includes('|') ? img.split('|')[1] : img : null
  }


  const isTrue = () => {
   return chapters.map(chapter => (
     <div className='chapters' style={{ marginTop:'auto', marginBottom:'auto'}} key={chapter.id? chapter.id: pageNum}>
          <img src={handleImage(chapter.cover_images)} alt={chapter.id} />
          <p> chapter: {chapter.id}</p>
     </div>
      
      ))
  }

  return  (
    <div className="covers">
      <div className='search'>
        <Input type="number"
                placeholder='jump to page'
                onChange={(event) => {(setPageNum(event.target.value))
          event.stopPropagation()}}
        />
        <Button disabled={pageNum < 1 || pageNum > 98 ? true : false}
                variant='contained' onClick={() =>{
                gotoPage()}}>
                Jump To
        </Button>
      </div>
      <div className='cover_container'>
      {
        !loading && len >= 10 ? (isTrue()): <h1>Loading ...</h1>
      }
      </div>
      <div className='buttonSection covers'>
        <div className ='div box'></div>

        <div className='div buttons ' >
          <Button variant='contained' 
            disabled={page === 1 ? true : false}
                  color='secondary'
                 onClick={() => { prevPage() }}>
                  Previous
          </Button>
            <h3>Page: {page}</h3>
          <Button variant='contained'
            disabled={page === 98 ? true : false}
                  color='primary' 
                  onClick={() => { nextPage() }}>
                  Next
          </Button>
        </div >

        <div className ='div box'></div>
      </div>
    </div>
  ) 
}

