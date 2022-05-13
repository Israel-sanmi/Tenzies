import React from 'react'
import logistics from '../../../assets/logistics.png'
import media from '../../../assets/media.png'
import ecommerce from '../../../assets/ecommerce.png'
import hospitality from '../../../assets/hospitality.png'
import fintech from '../../../assets/fintech.png'
import healthcare from '../../../assets/healthcare.png'

const Industries = () => {
  return (
    <div className='bg-[#222222] text-white pt-14'>
        <div className='text-center'>
            <h1 className='font-bold text-3xl uppercase md:block hidden'>browse by <span className='text-red-500'>industries</span></h1>
            <h1 className='font-bold text-4xl uppercase md:hidden block'>industries <br /> we <span className='text-red-500'>hire</span> for</h1>
            <p className='text-xs py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in <br /> lacus, duis sagittis. <br /> Eget elementum duis</p>
        </div>
        <div className='flex flex-wrap justify-center py-8'>
            <div className='md:flex block flex-wrap md:gap-5 gap-2 items-center'>
                <div>
                    <img className='cursor-pointer w-[297px] md:w-full py-2 md:py-0' src={logistics}/>
                </div>
                <div>
                    <img className='cursor-pointer w-[297px] md:w-full py-2 md:py-0' src={fintech}/>
                </div>
                <div>
                    <img className='cursor-pointer w-[297px] md:w-full py-2 md:py-0' src={ecommerce}/>
                </div>
            </div>
            <div className='md:flex block flex-wrap md:gap-5 gap-2 md:ml-10 ml-0'>
                <div>
                    <img className='cursor-pointer w-[297px] md:w-full py-2 md:py-0' src={hospitality}/>
                </div>
                <div>
                    <img className='cursor-pointer w-[297px] md:w-full py-2 md:py-0' src={media}/>
                </div>
                <div>
                    <img className='cursor-pointer w-[297px] md:w-full py-2 md:py-0' src={healthcare}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Industries