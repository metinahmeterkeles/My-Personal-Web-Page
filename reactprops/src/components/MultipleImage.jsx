import React, { useState } from 'react'
import ImgThumbnail from './ImgThumbnail'

function MultipleImage() {

  const [imageCounter,setImageCounter] = useState(1)

  function HandleClick(event){
    console.log(event.target.id)
    event.target.id === "add" ? setImageCounter(prev => prev+1) : setImageCounter(prev => prev>0 ? prev-1 : prev)
  }

  return (
    <>
      <button id='add' onClick={HandleClick}>Yeni Görsel Ekle</button>
      <button id='delete' onClick={HandleClick}>Görsel Sil</button>

      <hr />

    {
      [...Array(imageCounter)].map((item,index) => <ImgThumbnail key={index} imgSrc={`https://picsum.photos/id/${index + 100}/110/100`} />)
    }

    </>
  )
}

export default MultipleImage