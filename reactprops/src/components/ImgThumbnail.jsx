import React from 'react'

function ImgThumbnail( {imgSrc, imgAlt} ) {

  const imgStyle = {
    padding: "4px",
    borderRadius: "9px",
    marginBottom: "10px",
    border: "2px solid black",
    maxWidth: "100%",
    boxSizing: "border-box"
  }

  return (
    <img src={imgSrc} alt={imgAlt} style={imgStyle}></img>
  )
}

export default ImgThumbnail