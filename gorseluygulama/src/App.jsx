import { useState } from 'react'
import './App.css'

function App() {
  const [imageID, setImageID] = useState(250)

  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`

  return (
    <main class="container">
      <hgroup>
        <h2>Mini Görsel Uygulaması</h2>
        <p>Görsel</p>
      </hgroup>
      <img src={getLoremPicsumImg(imageID)} alt="1" />
    </main>
  )
}

export default App
