import React from 'react'
import Logo from './Logo'
import Account from './Account'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex items-center justify-between text-sm p-4 bg-black shadow-rose-500'>
        <Logo/>
        <Nav/>
        <Account/>
    </div>
  )
}

export default Header