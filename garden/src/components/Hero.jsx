import React, { useState } from 'react'
import Img1 from "../assets/image 1.jpg"
import Img2 from "../assets/image 2.jpg"
import Img3 from "../assets/image 3.jpg"
import "../style/hero.css"
export default function Hero() {
    const [bgImg, setBgImg] = useState(0)


    const img = [
        {
            id: 1,
            img: Img1
        },
        {
            id: 2,
            img: Img2
        },
        {
            id: 3,
            img: Img3
        }
    ]


    return (
        <section className='hero-section'>

            <div className='hero-img'>
                <img src={img[bgImg].img} alt="" />
            </div>
            <div className='hero-txt'>
                <div >
                <h1>Nature's Beauty Delivered to You</h1>
                <p className='heading-p'>Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>
                <div className='btn-div'>
                    <button className='booked-now-btn'>Book Now</button>
                    <button className='Video-btn'><i class="fa-regular fa-circle-play"></i>Watch Video</button>
                </div>
                </div>
            </div>
            <div className='carosel-btn'>
            <button className={bgImg==0? "carosel-btn-focus" : "none"}  onClick={e => setBgImg(0) }>01</button>
            <button className={bgImg==1? "carosel-btn-focus" : "none"}  onClick={e => setBgImg(1)}>02</button>
            <button className={bgImg==2? "carosel-btn-focus" : "none"}  onClick={e => setBgImg(2)}>03</button>
            </div>
        </section>
    )
}
