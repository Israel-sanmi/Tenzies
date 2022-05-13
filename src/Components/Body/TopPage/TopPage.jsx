import React from 'react'
import heroImg from '../../../assets/heroImg.png'
import backImg from '../../../assets/Eclipse.png'
import backTwo from '../../../assets/backTwo.png'


const TopPage = () => {
  return (
    <div className='mt-16 p-3 flex items-center flex-wrap'>
        <div className='text-white sm:w-[851px]  h-1/2 p-5'>
            {/* <img src={backImg} className='absolute top-[-66px] left-[1473px]'/> */}
            <div className='text-center md:text-left'>
                <h1 className='text-white text-3xl leading-none py-5 font-bold'>GET MATCHED AND LET YOUR JOB FIND <br /> YOU</h1>
                <p className='text-sm justify md:w-4/5 w-full py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus eius obcaecati minus ducimus, dolores enim beatae, sed quasi in recusandae, labore sunt voluptate nulla aspernatur provident? Odio, architecto accusantium
                </p>
                <button className='bg-[#D23432] hover:bg-gray-500 py-[19px] px-[28px] mt-6 rounded'>Join Talents Pipeline</button>
            </div>
            <div className='flex justify-center md:justify-start gap-8 mt-10'>
                    <div className=''>
                        <h1 className='sm:text-7xl text-5xl font-bold'>120<span className='text-[#D23432] text-7xl'>+</span></h1>
                        <p className='text-sm pl-2'>Recruiters</p>
                    </div>
                    <div className=''>
                        <h1 className='sm:text-7xl text-5xl font-bold'>200<span className='text-[#D23432] text-7xl'>+</span></h1>
                        <p className='text-sm pl-1'>Talents</p>
                    </div>
            </div>
        </div>
            <img src={backImg} className='absolute bottom-0 top-[-66px] hidden md:block right-0'/>
            <img src={backTwo} className='absolute top-[600px] hidden md:block left-[758px]'/>
        <div className='sm:ml-9 sm:w-1/2 w-full flex justify-center'>
            <img className='object-contain relative z-99 md:h-[710px] h-[305px] md:w-[552px] w-[232px]' width='100%' src={heroImg}/>
        </div>
    </div>
  )
}

export default TopPage