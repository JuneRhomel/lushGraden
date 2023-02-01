import React from 'react'
import person1 from "../assets/person1.png"
import "../style/testimonial.css"

export default function Testimonial() {
    return (
        <section className='testimonial-section'>
            <div className="container">
            <h2>What do they say about us</h2>
            <div className='testimonial'>
                <div className='card'>
                    <div className='person'>
                        <img src={person1} alt="" />
                        <h3>Jessica Watson</h3>
                    </div>
                    <p>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
                </div>
                <div className='card' >
                    <div className='person'>
                        <img src={person1} alt="" />
                        <h3>Jessica Watson</h3>
                    </div>
                    <p>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
                </div>
                <div className='card'>
                    <div className='person'>
                        <img src={person1} alt="" />
                        <h3>Jessica Watson</h3>
                    </div>
                    <p>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
                </div>
                
            </div>
            </div>
        </section>
    )
}
