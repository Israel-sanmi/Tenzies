import React, { useState } from 'react'
import Die from '../Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

const Tensies = () => {
  const [dice, setdice] = useState(allNewDice())
  const [tensies, setTensies] =useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue= dice[0].value
    const allSameVal = dice.every(die => die.value === firstValue)
    if (allHeld && allSameVal){
      setTensies(true)
    }
  }, [dice])
  
  
  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() *6),
      isHeld: false,
      id: nanoid()
    }
  }
  function allNewDice(){
    const newDice = []
    for(let i=0; i<10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDie(){
    if(!tensies){
      setdice(oldDice => oldDice.map(die =>{
        return die.isHeld ?
        die:
        generateNewDie()
      }))
    }else{
      setTensies(false)
      setdice(allNewDice())
    }
  }

  function holdDice(id){
    setdice(oldDice => oldDice.map(die => {
      return die.id === id ? 
      {...die, isHeld: !die.isHeld}:
      die
    }))
  }

  const diceElements = dice.map(die => <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld}
    holdDice = {()=>holdDice(die.id)}
    />)
  return (
        <main className='p-3 bg-gray-500 md:w-1/4 rounded items-center flex flex-col mx-auto justify-center md:h-1/4 h-screen'>
          {tensies && <Confetti/>}
          <h1 className='font-bold text-3xl text-white'>Tensies</h1>
          <p className='text-center mb-6'>Roll until each die are all the same. Click each die to freeze it at its current values between rolls.</p>
        <div className='font-bold flex gap-4 flex-wrap justify-center'>
            {diceElements}
        </div>
        <button 
        className='bg-purple-500 rounded py-2 px-6 uppercase font-bold mt-5 cursor-pointer text-white active:shadow-inner'
        onClick={rollDie}
        >{tensies?"New Game":"Roll"}</button>
        </main>
        
  )
}

export default Tensies