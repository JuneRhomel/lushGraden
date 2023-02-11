import React from 'react'
import Plantscard from './Plantscard'

export default function Offer() {
    console.log({value})
    return (
        <section className='offer-section'>
            <div className="container">
                <h2>What we offer to you</h2>
                <div>
                    <Plantscard/>
                </div>
            </div>

        </section>
    )
}
