import React from 'react'
import Cards from './Cards'
import mobile from '../../../assets/mobile.png'
import reactdev from '../../../assets/reactdev.png'
import dev from '../../../assets/dev.png'
import graphics from '../../../assets/graphics.png'
import arrLeft from '../../../assets/arrLeft.png'
import arrRight from '../../../assets/arrRight.png'

const Card = () => {
  return (
    <div>
        <div className='md:flex hidden justify-around items-center'>
        <img src={arrLeft} className='object-contain md:block hidden bg-[#222222] h-1/2 p-5 rounded-full cursor-pointer'/>
            <Cards 
                img= {mobile}
                course = 'UI/UX Design'
            />
            <Cards 
                img= {reactdev}
                course = 'React Developer'
            />
            <Cards 
                img= {graphics}
                course = 'Graphics Design'
            />
            <Cards 
                img= {dev}
                course = 'Developer'
            />
        <img src={arrRight} className='object-contain md:block hidden bg-[#222222] h-1/2 p-5 rounded-full cursor-pointer'/>
        </div>

        <div className='md:hidden flex flex-col items-center gap-4'>
            <Cards 
                img= {mobile}
                course = 'UI/UX Design'
            />
            <Cards 
                img= {reactdev}
                course = 'React Developer'
            />
            <Cards 
                img= {graphics}
                course = 'Graphics Design'
            />
            <Cards 
                img= {dev}
                course = 'Developer'
            />
        </div>
    </div>
  )
}

export default Card