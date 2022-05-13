import React, { useState } from 'react'
import cart from '../../assets/cart.png'
import avatar from '../../assets/avatar.png'
import drop from '../../assets/dropdwn.png'
import menu from '../../assets/menu.png'


const Account = () => {
  const [open, setOpen] = useState(false)
  const dropdwn=()=>{
      setOpen(prev=>!prev)
  }
  return (
    <div className='text-white flex items-center'>

        <div className='w-7 flex -ml-20 md:ml-0 gap-2 items-center'>
            <img src={cart}/>
            <img src={menu} className='md:hidden cursor-pointer object-fit' onClick={dropdwn}/>
        </div>
        {open && 
        <div className='absolute top-0 w-screen h-[100vh] right-0 text-center md:hidden'>
          <ul className='items-center md:uppercase gap-4 text-lg bg-white text-black font-bold cursor-pointer'>
            <li onClick={dropdwn} className='text-red-500 font-bold text-3xl'>X</li>
            <li className='font-bold uppercase py-5 hover:text-red-500'>Services</li>
            <li className='font-bold uppercase py-5 hover:text-red-500'>Academy</li>
            <li className='font-bold uppercase py-5 hover:text-red-500'>Community</li>
            <li className='font-bold uppercase py-5 hover:text-red-500'>Workforce</li>
            <li className='font-bold uppercase py-5 hover:text-red-500'>Store</li>
            <li className='font-bold uppercase py-5 hover:text-red-500'>Affiliate</li>
          </ul>
        </div>}
        <div className='md:flex hidden items-center gap-4 text-lg cursor-pointer'>
            <img src={avatar} className='pl-4'/>
            <p>My Account</p>
            <img src={drop}/>
        </div>

    </div>
  )
}

export default Account