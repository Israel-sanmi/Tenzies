import React from 'react'
// import CardData from '../ReasonstoJoin/CardData'


const Cards = ({course, img}) => {
    // const dataItems = {CardData}
  return (
    <div className='sm:w-[300px] w-[250px] bg-[#222222] rounded-xl'>
        <div className='flex justify-end'>
            <img src={img} className='object-fit py-10 px-3 sm:w-30 w-50'/>
        </div>
        <div className='pb-7 pl-5'>
            <h1 className='md:text-3xl text-2xl font-bold text-white'>{course}</h1>
            <p className='text-red-500 md:text-lg text-sm'>120 Jobs Available</p>
        </div>
    </div>
  )
}

export default Cards