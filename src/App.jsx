import React from 'react'
import Industries from './Components/Body/BrowseTab/Industries'
import MidPage from './Components/Body/MidPage/MidPage'
import TopPage from './Components/Body/TopPage/TopPage'
import FifthArea from './Components/Body/FifthArea/FifthArea'

import SuccessStory from './Components/Body/FifthArea/SuccessStory'
import Footer from './Components/Footer/Footer'
import Header from './Components/Head/Header'
import WhyYouShouldJoin from './Components/Body/ReasonstoJoin/WhyYouShouldJoin'
import JoinNetwork from './Components/Body/FifthArea/JoinNetwork'


const App = () => {
    
  return (
    <div className='bg-black'>
      <Header/>
        <div className='mb-10'>
          <TopPage/>
        </div>
      <MidPage/>
      <WhyYouShouldJoin/>
      <Industries/>
      <FifthArea/>
      <SuccessStory/>
      <JoinNetwork/>
      <Footer/>
    </div>
  )
}

export default App