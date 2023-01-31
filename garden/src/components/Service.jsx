import React from 'react'
import Banner from "../assets/Group 1.png"
import Cosuming from "../assets/Time-Cosuming 1.svg"
import Sprout from "../assets/Grow_Sprout 1.svg"
import Temperature from "../assets/Temperature 1.svg"
import Pruning from "../assets/Pruning 1.svg"
import "../style/service.css"

export default function Service() {
    return (
        <section className='service-section'>
            <div className="">
                <div className='grid-service '>

                    <img className='left-img box1' src={Banner} alt="" />

                    <div className='box2 box'>
                        <div className='service-box'>
                            <div><img src={Cosuming} alt="" /></div>
                            <div>
                                <h3>Quality Product</h3>
                                <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                            </div>
                        </div>
                    </div>
                    <div className='box3 box'>
                        <div  className='service-box'>
                            <div><img src={Sprout} alt="" /></div>
                            <div>
                                <h3>Quality Product</h3>
                                <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                            </div>
                        </div>
                    </div>
                    <div className='box4 box'>
                        <div  className='service-box'>
                            <div><img src={Temperature} alt="" /></div>
                            <div>
                                <h3>Always Fresh</h3>
                                <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                            </div>
                        </div>
                    </div>
                    <div className='box5 box'>
                        <div  className='service-box'>
                            <div><img src={Pruning} alt="" /></div>
                            <div>
                                <h3>Quality Product</h3>
                                <p>Our flowers are of the highest quality, carefully selected and sourced from reput able</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
