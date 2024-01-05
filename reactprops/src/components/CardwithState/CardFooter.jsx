import React from 'react'

function CardFooter({like,setLike,handleClick}) {
  return (
    <>
      <h2>Card Footer ({like}) Likes </h2>
      <button onClick={handleClick}>Footer Likes</button>
      <button onClick={() => setLike(prev => prev + 4)}>Like 4 arttır</button>
    </>
  )
}

export default CardFooter