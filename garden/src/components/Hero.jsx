import React, { useState } from 'react'
import Img1 from "../assets/image 1.jpg"
import Img2 from "../assets/image 2.jpg"
import "../style/hero.css"
export default function Hero() {
    const [bgImg, setBgImg] = useState(1)


    const img = [Img1, Img2 ]

    console.log(img)
    return (
        <section className='hero-section'>
            <div className='hero-img'>
                <img src={Img1} alt="" />
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

        </section>
    )
}
