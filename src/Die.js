import React from 'react'

const Die = (props) => {
  return (
    <div>
        <p className={props.isHeld ? 'bg-green-500 w-10 text-center p-3 rounded shadow-lg cursor-pointer'
        : 'bg-white w-10 text-center p-3 rounded shadow-lg cursor-pointer'  
      }
      onClick={props.holdDice}>{props.value}</p>
    </div>
  )
}

export default Die