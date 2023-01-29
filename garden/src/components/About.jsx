import React from 'react'
import "../style/about.css"
import Aboutcards from './Aboutcards'

export default function About() {
    return (
        <section className='about-section'>
            <div className='container '>
                <div className='about-box'>
                    <div className='h-tag'>
                        <h2>We Help choose the most suitable plants for you</h2>
                    </div>
                    <div className='p-tag'>
                        <p>Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
                    </div>
                </div>
                <Aboutcards />
            </div>


        </section>
    )
}
