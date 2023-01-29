import React from 'react'
import "../style/cardabout.css"
import planticon1 from "../assets/Indoor_Plant.svg"
import planticon2 from "../assets/Outdoor_Plant.svg"
import planticon3 from "../assets/Bamboo 257.svg"
export default function Aboutcards() {
  return (
    <div className='cards'>
      <article className='card-about'>
      <div>
        <div><img src={planticon1} alt="" /></div>
      </div>

        <h3>Indoor Plants</h3>
        <p>Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants</p>
      </article>
      <article className='card-about center'>
      <div>
        <div><img src={planticon2} alt="" /></div>
      </div>

        <h3>Outdoor Plants</h3>
        <p>Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.</p>
      </article>

      <article className='card-about'>
      <div>
        <div><img src={planticon3} alt="" /></div>
      </div>

        <h3>Indoor Plants</h3>
        <p>Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor</p>
      </article>
    </div>
  )
}
