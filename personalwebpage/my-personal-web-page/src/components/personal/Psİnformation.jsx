import React from 'react'
import "./personal.css"
import resim1 from "./profil.jpeg"

function Psİnformation() {
  return (
    <div className='container-info'>
      <section className='info'>
        <div className="info-text">
          <p className="header-primary">Metin Ahmet Erkeleş</p>
          <p className="header-secondary">-Software Developer</p>
          <p className="text">Hello this is Metin. I am working as a full stack web. </p>
          <p>You can find the technologies I use below.</p>
        </div>
        <div className='info-img'>
          <img src={resim1} alt="" />
        </div>
      </section>

      <section className='link'>
        <div className='link'>
          <a href="https://github.com/metinahmeterkeles"></a>
          <a href="https://www.linkedin.com/in/metin-ahmet-e-37550526b/"></a>
        </div>
      </section>
    </div>
  )
}

export default Psİnformation