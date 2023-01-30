import React from 'react'
import Plant1 from "../assets/plant1.jpg"
import "../style/plantcard.css"

export default function Plantscard() {
    return (
        <div className='all-plants'>
            <article className='plant-card'>
                <div className='plant-img'>
                <img src={Plant1} alt="" />
                </div>
                <div className='plant-text'>
                    <div>
                    <h3>Cactus Plant</h3>
                    <small>($10)</small>
                    <b>$8</b>
                    </div>
                    <button>Buy Now</button>
                </div>
            </article>

        </div>
    )
}
