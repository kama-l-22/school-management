import React from 'react'
import imporlogo from '../asset/icons8-important-50.png'
export default function ImprotantNotice({message}) {
  return (
    <div className='importantNotice'>
      <div className='importantlogo'>
        <img alt='improtant logo' src={imporlogo}></img>
      </div>
      <div className='message'>Important Notice will be dispaly here X Important Notice will be dispaly here</div>
    </div>
  )
}
