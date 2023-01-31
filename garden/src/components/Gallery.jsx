import React from 'react'
import img1 from "../assets/1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import "../style/Gallery.css"
export default function Gallery() {
  return (
    <section>
        
        <h2>Our Gallery View</h2>
        <div className='grid-img '>
                <img className='img1' src={img1} alt="" />
                <img className='img2' src={img2} alt="" />
                <img className='img3' src={img3} alt="" />
                <img className='img4' src={img4} alt="" />
                <img className='img5' src={img5} alt="" />
        </div>
    </section>
  )
}
