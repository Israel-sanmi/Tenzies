import React from 'react'
import zig from '../../../assets/zig.png'
import jobImg from '../../../assets/jobImg.png'
import OfferCate from './OfferCate'



const jobOffers = () => {
  return (
    <div className=''>
        <div className=''>
            <img src={zig} className='block mx-auto py-16 md:w-1/6 w-1/3'/>
            <h1 className='uppercase font-bold text-white md:block hidden text-2xl text-center'>job offers</h1>
            <h1 className='uppercase font-bold md:hidden block text-white text-2xl text-center'><span className='text-red-500'>job</span> offers</h1>
        </div>
          <div className=''>
            <div className='flex pt-10 justify-center flex-wrap'>
              <div className='md:bg-[#222222] bg-none flex text-white sm:w-1/3 w-full flex-wrap md:pt-16 pt-2 md:pl-16 rounded-lg'>
                <div>
                  <h1 className='text-5xl font-bold px-10'>500<span className='text-red-500'>+</span></h1>
                  <p className='text-sm pl-10'>Job offers</p>
                </div>
                <div>
                  <h1 className='text-5xl font-bold'>100<span className='text-red-500'>+</span></h1>
                  <p className='text-sm'>Startups</p>
                </div>
                
              </div>
              <div>
                <img src={jobImg} className='object-contain w-3/4 hidden md:block'/>
              </div>
            
            </div>
          </div>
          <OfferCate/>
          <img src={zig} className='block mx-auto py-16 md:w-1/6 w-1/3'/>
    </div>
  )
}

export default jobOffers