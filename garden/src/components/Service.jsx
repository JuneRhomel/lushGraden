import React from 'react'
import Banner from "../assets/Group 1.png"
import Cosuming from "../assets/Time-Cosuming 1.svg"
import "../style/service.css"

export default function Service() {
    return (
        <section className='service-section'>
            <div className="">
                <div className='grid-service '>
                <img className='left-img box1' src={Banner} alt="" />
                <div className='box2 box'>
                    <img src={Cosuming} alt="" />
                    <div>
                        <h3>Quality Product</h3>
                        <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                    </div>
                </div>
                <div  className='box3 box'>
                    <div><img src={Cosuming} alt="" /></div>
                    <div>
                        <h3>Quality Product</h3>
                        <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                    </div>
                </div>
                <div  className='box4 box'>
                    <img src={Cosuming} alt="" />
                    <div>
                        <h3>Quality Product</h3>
                        <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                    </div>
                </div>
                <div  className='box5 box'>
                    <img src={Cosuming} alt="" />
                    <div>
                        <h3>Quality Product</h3>
                        <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                    </div>
                </div>
                </div>
            </div>

        </section>
    )
}
