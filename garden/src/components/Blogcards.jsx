import React from 'react'
import Blog1 from "../assets/blog1.png"
import "../style/blog.css"
import date from "../assets/date.svg"
import arrow from "../assets/arrow.svg"
export default function Blogcards() {
    return (
        <>

            <article className='blog-card'>
                <div className='blog-img'>
                    <img src={Blog1} alt="" />
                </div>
                <div className='text-blog'>
                    <h3>More productive with an atmosphere of greenery</h3>
                    <p>An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...</p>
                    <div className='blog-footer'>
                        <div>
                            <img src={date} alt="" />
                            <small>January 20, 2023</small>
                        </div>
                        <div>
                            <b>Read More</b>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </article>
            <article className='blog-card'>
                <div className='blog-img'>
                    <img src={Blog1} alt="" />
                </div>
                <div className='text-blog'>
                    <h3>More productive with an atmosphere of greenery</h3>
                    <p>An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...</p>
                    <div className='blog-footer'>
                        <div>
                            <img src={date} alt="" />
                            <small>January 20, 2023</small>
                        </div>
                        <div>
                            <b>Read More</b>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </article>
            <article className='blog-card'>
                <div className='blog-img'>
                    <img src={Blog1} alt="" />
                </div>
                <div className='text-blog'>
                    <h3>More productive with an atmosphere of greenery</h3>
                    <p>An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...</p>
                    <div className='blog-footer'>
                        <div>
                            <img src={date} alt="" />
                            <small>January 20, 2023</small>
                        </div>
                        <div>
                            <b>Read More</b>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
