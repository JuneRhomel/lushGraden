import React, { useState } from 'react'
import Star from "../assets/Star 1.svg"

export default function Modem({ value, closeBtn }) {
  const [opneTap, setOpenTab] = useState(true)


  return (
    <div className='Modem-bg'>
      <div className='Modem'>
        <button className='closeBtn' onClick={closeBtn}><i class="fa-solid fa-caret-left"></i> Back</button>
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
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae ducimus eligendi amet odio quas, aperiam libero sunt iste eaque qui quibusdam numquam labore maiores earum pariatur illum ipsa inventore. </p>
              </div>
              :
              <>
                <div className='comment-box' >
                  <div className='comment'>
                    <img src={value.img} alt="" />
                    <div className='comment-txt'>
                      <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, laborum consequatur fuga quis aspernatur, repellat unde eius nostrum, sunt corporis fugiat debitis. Eius enim pariatur suscipit consequatur minus similique iure! adipisicing elit. Doloremque eius aperiam nemo consequuntur aliquid veniam facilis cumque accusantium. </p>
                    </div>
                  </div>
                  <div className='comment'>
                    <img src={value.img} alt="" />
                    <div className='comment-txt'>
                      <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, laborum consequatur fuga quis aspernatur, repellat unde eius nostrum, sunt corporis fugiat debitis. Eius enim pariatur suscipit consequatur minus similique iure! adipisicing elit. Doloremque eius aperiam nemo consequuntur aliquid veniam facilis cumque accusantium. </p>
                    </div>
                  </div>
                  <div className='comment'>
                    <img src={value.img} alt="" />
                    <div className='comment-txt'>
                      <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, laborum consequatur fuga quis aspernatur, repellat unde eius nostrum, sunt corporis fugiat debitis. Eius enim pariatur suscipit consequatur minus similique iure! adipisicing elit. Doloremque eius aperiam nemo consequuntur aliquid veniam facilis cumque accusantium. </p>
                    </div>
                  </div>
                  <div className='comment'>
                    <img src={value.img} alt="" />
                    <div className='comment-txt'>
                      <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, laborum consequatur fuga quis aspernatur, repellat unde eius nostrum, sunt corporis fugiat debitis. Eius enim pariatur suscipit consequatur minus similique iure! adipisicing elit. Doloremque eius aperiam nemo consequuntur aliquid veniam facilis cumque accusantium. </p>
                    </div>
                  </div>
                  <div className='comment'>
                    <img src={value.img} alt="" />
                    <div className='comment-txt'>
                      <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, laborum consequatur fuga quis aspernatur, repellat unde eius nostrum, sunt corporis fugiat debitis. Eius enim pariatur suscipit consequatur minus similique iure! adipisicing elit. Doloremque eius aperiam nemo consequuntur aliquid veniam facilis cumque accusantium. </p>
                    </div>
                  </div>

                  <div className='comment'>
                    <img src={value.img} alt="" />
                    <div className='comment-txt'>
                      <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, laborum consequatur fuga quis aspernatur, repellat unde eius nostrum, sunt corporis fugiat debitis. Eius enim pariatur suscipit consequatur minus similique iure! adipisicing elit. Doloremque eius aperiam nemo consequuntur aliquid veniam facilis cumque accusantium. </p>
                    </div>
                  </div>
                </div>
                <div className='input-commnet'>
                  <form onSubmit={(e)=> e.preventDefault()} >
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
