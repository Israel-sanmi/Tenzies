import React from 'react'
import zig from '../../../assets/zig.png'
import Card from './Card'
import Offers from './Offers'


const WhyYouShouldJoin = () => {
  return (
    <div>
        <div>
            <img src={zig} className='block mx-auto py-16 md:w-1/6 w-1/3'/>
        </div>
        <div className='text-white text-center pb-9'>
            <h1 className='font-bold text-2xl hidden md:block'>WHO SHOULD JOIN THE NERDYEYE PIPELINE</h1>
            <h1 className='font-bold text-4xl text-center md:hidden block'>WHO SHOULD JOIN <br /> THE <span className='text-red-500'>NERDYEYE <br /> PIPELINE</span></h1>
            <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nisl, turpis nisl dignissim. Ipsum.</p>
        </div>
        <Card/>
        <Offers/>
        
    </div>
  )
}

export default WhyYouShouldJoin