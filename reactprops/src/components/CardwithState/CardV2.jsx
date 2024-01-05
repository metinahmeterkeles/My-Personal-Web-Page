import React, { useState } from 'react'
import CardHeader from "./CardHeader"
import CardFooter from "./CardFooter"

function CardV2() {

  const [like,setLike] = useState(0)

  function HandleClick(){
    setLike(prev => prev+1)
  }

  return (
    <div>
      <CardHeader like={like} />
      <button onClick={HandleClick}>Like</button>

      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Voluptatibus, id impedit!</li>
        <li>Iste, itaque dicta.</li>
      </ul>

      <CardFooter like={like} setLike={setLike} handleClick={HandleClick}/>
    </div>
  )
}

export default CardV2