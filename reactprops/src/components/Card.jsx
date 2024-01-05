import React from 'react'
import ImgThumbnail from './ImgThumbnail'

function Card({title,imgSrc,imgAlt,children}) {

  const cardStyle= {
    padding: "10px",
    borderRadius: "9px",
    marginBottom: "10px",
    border: "2px solid black",
    boxSizing: "border-box"
  }

  return (
    <div style={cardStyle}>
      <ImgThumbnail imgSrc={imgSrc} imgAlt={imgAlt} />
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Card