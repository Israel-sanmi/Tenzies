import React from 'react'
import dave from '../../../assets/dave.png'
import john from '../../../assets/john.png'
import helen from '../../../assets/helen.png'
import zig from '../../../assets/zig.png'

const SuccessStory = () => {
  return (
    <div className='text-white'>
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-3xl uppercase'>success stories</h1>
                <p className='text-xs py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus <br /> placerat id in vehicula facilisi. Fusce tellus fringill</p>
            </div>
            <div className='md:flex block ml-16 md:ml-0 flex-wrap items-center gap-5 py-10 justify-center'>
                <div className='bg-[#1f1d1d] md:w-1/5 w-3/4 cursor-pointer md:h-80 h-96 p-2 rounded-xl text-center'>
                    <img src={dave} className='block mx-auto py-1'/>
                    <p className='text-lg text-red-500 font-bold mt-4'>Dave Mark</p>
                    <p className='leading-1 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.</p>
                </div>
                <div className='bg-[#1f1d1d] md:w-1/4 w-3/4 md:my-0 my-4 h-96 cursor-pointer p-2 rounded-xl text-center'>
                    <img src={john} className='block mx-auto py-1'/>
                    <p className='text-lg text-red-500 font-bold mt-4'>John Doe</p>
                    <p className='leading-1 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.</p>
                </div>
                <div className='bg-[#1f1d1d] md:w-1/5 w-3/4 md:h-80 h-96 cursor-pointer p-2 rounded-xl text-center'>
                    <img src={helen} className='block mx-auto py-1'/>
                    <p className='text-lg text-red-500 font-bold mt-4'>Helen Wills</p>
                    <p className='leading-1 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.</p>
                </div>
            </div>
        </div>
        <img src={zig} className='block mx-auto py-10 md:w-1/6 w-1/3'/>
    </div>
  )
}

export default SuccessStory