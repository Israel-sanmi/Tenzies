import React from 'react'
import arrow from '../../../assets/arrow.png'
import HowItWorks from './HowItWorks'

const MidPage = () => {
  return (
    <div className='bg-[#0E0E0E] relative py-5 md:block flex justify-center'>
        <div className=''>
            <h1 className='text-white font-bold text-3xl py-14 text-center'>HOW IT WORKS</h1>
            <div className=''>
                <div className='md:flex block md:justify-evenly md:px-28 px-2'>
                    <HowItWorks number='1'/>
                    <img src={arrow} className='object-contain hidden md:block'/>
                    <HowItWorks number='2'/>
                    <img src={arrow} className='object-contain hidden md:block'/>
                    <HowItWorks number='3'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MidPage