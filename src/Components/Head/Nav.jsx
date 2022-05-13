import React from 'react'
import mark1 from '../../assets/mark1.png'
import mark2 from '../../assets/mark2.png'

const Nav = () => {
  return (
    <div className='text-white'>
        <img src={mark1} className='absolute hidden md:block top-0 left-[30.21%]'/>
        <ul className='md:flex items-center gap-4 text-lg cursor-pointer hidden'>
            <li>Services</li>
            <li>Academy</li>
            <li>Community</li>
            <li>Workforce</li>
            <li>Store</li>
            <li>Affiliate</li>
        </ul>
        <img src={mark2} className='absolute hidden md:block top-0 left-[69.74%]'/>
    </div>
  )
}

export default Nav