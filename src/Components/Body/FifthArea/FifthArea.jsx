import React from 'react'
import heroImg from '../../../assets/heroImg.png'
import tick from '../../../assets/tick.png'
import zig from '../../../assets/zig.png'


const FifthArea = () => {
  return (
    <div className='bg-black text-white mt-10 md:w-4/5 w-full rounded-3xl block mx-auto'>
        <div className='flex bg-[#49494922] flex-wrap items-center justify-center p-10'>
            <div className='hidden md:block'>
                <img src={heroImg}/>
            </div>
            <div className='p-5'>
                <h1 className='uppercase md:text-3xl text-xl hidden md:block font-bold'>why you should join the <br /> <span className='text-red-500'>nerdeye talent pipeline</span></h1>
                <h1 className='uppercase md:text-3xl block md:hidden text-xl font-bold text-center'>why you should join <br /> the <span className='text-red-500'>nerdeye talent <br /> pipeline</span></h1>
                <div className='bg-[#44444422] w-full rounded-md flex items-center gap-5 p-2 capitalize my-5'>
                    <img src={tick}/> 
                    <span className='sm:text-lg text-sm'>long term placements</span>
                </div>
                <div className='bg-[#44444422] w-full rounded-md flex items-center gap-5 p-2 capitalize my-5'>
                    <img src={tick}/> 
                    <span className='sm:text-lg text-sm'>long term placements</span>
                </div>
                <div className='bg-[#44444422] w-full rounded-md flex items-center gap-5 p-2 capitalize my-5'>
                    <img src={tick}/> 
                    <span className='sm:text-lg text-sm'>long term placements</span>
                </div>
                <div className='bg-[#44444422] w-full rounded-md flex items-center gap-5 p-2 capitalize my-5'>
                    <img src={tick}/> 
                    <span className='sm:text-lg text-sm'>long term placements</span>
                </div>
                <div className='bg-[#44444422] w-full rounded-md flex items-center gap-5 p-2 capitalize my-5'>
                    <img src={tick}/> 
                    <span className='sm:text-lg text-sm'>long term placements</span>
                </div>
            </div>
        </div>
        <img src={zig} className='block mx-auto py-14 md:w-1/6 w-1/3'/>
    </div>
  )
}

export default FifthArea