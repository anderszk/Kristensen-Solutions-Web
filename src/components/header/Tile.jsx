import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

function Tile(props) {
  if(props.img === 'img1'){
    return (
      <div className='tile'>
        <img src={img1} className="tile-image1" alt='img1'/>
      </div>
    )
  }

  else if(props.img === 'img2'){
    return (
      <div className='tile'>
        <img src={img2} className="tile-image2" alt='img2'/>
      </div>
    )
  }

  else if(props.img === 'img3'){
    return (
      <div className='tile'>
        <img src={img3} className="tile-image3" alt='img3'/>
      </div>
    )
  }
}

export default Tile