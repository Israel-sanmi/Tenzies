import React from 'react'
import footer from '../../assets/footer.png'
import mobileFooter from '../../assets/mobileFooter.png'

const Footer = () => {
  return (
    <div>
        <img src={footer} className='md:block hidden'/>
        <img src={mobileFooter} className='md:hidden block' />
    </div>
  )
}

export default Footer