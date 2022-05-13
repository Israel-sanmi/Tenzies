import React from 'react'

const HowItWorks = ({number}) => {
  return (
    <div className='text-white sm:w-52 w-[297px] md:py-0 py-10'>
        <div className='flex justify-center'>
            <p className='text-xl bg-[#575757] flex items-center justify-center py-6 px-5 w-20 rounded-full'>{number}</p>
        </div>
        <p className='text-2xl text-center font-bold'>Title Goes Here</p>
        <p className='text-xs leading-1 md:py-0 py-4 sm:w-full w-[297px]  text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis</p>
    </div>
  )
}

export default HowItWorks