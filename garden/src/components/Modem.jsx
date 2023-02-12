import React from 'react'
import Star from "../assets/Star 1.svg"

export default function Modem({ value, closeBtn }) {
  return (
    <div className='Modem-bg'>
      <div className='Modem'>
        <div className='all-img'>
          <img className='main-img' src={value.img} alt="" />
          <div className='sub-img'>
            <img src={value.img} alt="" />
            <img src={value.img} alt="" />
            <img src={value.img} alt="" />
          </div>
        </div>

        <div className='desctiption'>
          {/* <button onClick={closeBtn}>Close</button> */}
          <div className='head'>
            <div className='title'>
              <h3>{value.title}</h3>
              <div className='img-star'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <div>
                <small>(${value.originPrize})</small>
                <b>${value.prize}</b>
              </div>
            </div>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
