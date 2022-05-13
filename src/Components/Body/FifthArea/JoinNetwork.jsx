import React from 'react'
import shake from '../../../assets/shake.png'

const JoinNetwork = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-center items-center'>
            <div>
                <img src={shake} className='hidden md:block'/>
            </div>
            <div className='text-white py-4 px-8'>
                <h1 className='uppercase text-center md:text-right text-3xl md:block hidden font-bold'>join the nerdeye <span className='text-red-500'>network</span></h1>
                <h1 className='uppercase text-center md:text-right md:hidden block text-3xl font-bold'>join the nerdeye <span className='text-red-500'> <br /> network</span></h1>
                <p className='text-xs text-center md:text-right'>Thank you for showing interest in the Nerdy Eye's Recruitment program. Please fill the <br /> form below and we will connect you with your ideal employers as soon as possible.</p>

                <form>
                    <p className='text-lg py-3 font-bold text-[#ffcdcd22]'>Role<span className='text-red-500'>*</span></p>
                    <input type="text" className='w-full rounded-xl bg-[#ffcdcd22] h-[80.67px]'/>
                    <p className='text-lg py-3 font-bold text-[#ffcdcd22]'>Years of experience<span className='text-red-500'>*</span></p>
                    <input type="text" className='w-full rounded-xl bg-[#ffcdcd22] h-[80.67px]'/>
                    <p className='text-lg py-3 font-bold text-[#ffcdcd22]'>Work type<span className='text-red-500'>*</span></p>
                    <input type="text" className='w-full rounded-xl bg-[#ffcdcd22] h-[80.67px]'/>
                    <button className='bg-red-500 rounded-lg p-4 font-bold mt-4'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default JoinNetwork