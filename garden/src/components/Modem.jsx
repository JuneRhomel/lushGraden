import React from 'react'

export default function Modem({value,closeBtn}) {
  return (
    <div className='Modem-bg'>
    <div className='Modem'>
        <button onClick={closeBtn}>Close</button>
        <img src={value.img} alt="" />
        <h3>{value.title}</h3>
        <small>(${value.originPrize})</small>
        <b>${value.prize}</b>
    </div>
    </div>
  )
}
