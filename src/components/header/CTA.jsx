import React from 'react'
import './header.css'


function CTA(props) {
       if(props.type === 'CV'){
            return (
                <div className='cta'>
                    <a href="#" className='btn'>See my CV <span role="img" aria-label="sheep"> 👀</span></a>
                </div>
            )
        }
        else if (props.type === 'Contact'){
            return(
                <div className='cta'>
                    <a href="#" className='btn'>Contact Me! <span role="img" aria-label="sheep"> 🤙</span></a>
                </div>
            )
        }
}

export default CTA