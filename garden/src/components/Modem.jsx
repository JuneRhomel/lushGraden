import React, { useEffect, useState } from 'react'
import Star from "../assets/Star 1.svg"
import "../style/ModemPlants.css"

export default function Modem({ value, closeBtn }) {
  const [opneTap, setOpenTab] = useState(true)
  const [imgDisplay, setImgDisplay ] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      imgDisplay === 2? setImgDisplay(0):setImgDisplay(imgDisplay +1)
    }, 3000);

    return () => {
        clearInterval(intervalId);
    };
}, [imgDisplay]);

  return (
    <div className='Modem-bg'>
      <div className='Modem'>
        <button className='closeBtn' onClick={closeBtn}><i class="fa-solid fa-caret-left"></i> Back</button>
        <div className='all-img'>
          <img className='main-img' src={value.img[imgDisplay]} alt="" />
          <div className='sub-img'>
            <img onClick={()=>setImgDisplay(0)} src={value.img[0]} alt="" />
            <img onClick={()=>setImgDisplay(1)} src={value.img[1]} alt="" />
            <img onClick={()=>setImgDisplay(2)} src={value.img[2]} alt="" />
          </div>
        </div>

        <div className='desctiption'>
          {/* <button onClick={closeBtn}>Close</button> */}
          <div className='head'>
            <div className='title'>
              <h3>{value.title}</h3>
              <div className='img-star'>
                {Array(value.rate).fill(1).map((i) => <img src={Star} alt="" key={Math.random()} />)}
              </div>
              <div>
                <small>(${value.originPrize})</small>
                <b>${value.prize.toString()}</b>
              </div>
            </div>
            <button>Buy Now</button>
          </div>

          <div className='body'>
            <div className='nav-body'>
              <nav>
                <ul>
                  <li onClick={() => setOpenTab(true)} className={opneTap ? "active" : ""}>Description</li>
                  <li onClick={() => setOpenTab(false)} className={!opneTap ? "active" : ""}>Review <span>2</span></li>
                </ul>
              </nav>
            </div>
            {opneTap ?
              <div className='description-text'>
                <p>{value.description}</p>
              </div>
              :
              <>
                <div className='comment-box' >

                  {value.comment.map((i) => {
                    return (
                      <div className='comment' key={i.id}>
                        <img src={i.user} alt="" />
                        <div className='comment-txt'>
                          <p>{i.text}</p>
                        </div>
                      </div>
                    )
                  })}

                </div>
                <div className='input-commnet'>
                  <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text" placeholder='Add Commnet...' />
                    <button>Submit</button>
                  </form>
                </div>
              </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
