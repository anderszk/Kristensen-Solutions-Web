import React from 'react'
import CTA from './CTA'
import './header.css'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

function Header() {
  return (
    <header>
        <div className="container header__container">
            <div className='tile'>
                <img src={img1} className="tile-image1" alt='img1'/>
                <img src={img2} className="tile-image2" alt='img1'/>
                <img src={img3} className="tile-image3" alt='img1'/>
            </div>
            <CTA type="CV"/>
            <CTA type="Contact"/>
        </div>
    </header>
  )
}

export default Header