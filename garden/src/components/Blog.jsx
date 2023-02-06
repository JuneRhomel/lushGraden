import React from 'react'
import "../style/blog.css"
import Blogcards from './Blogcards'
export default function Blog() {
  return (
    <section className='blog-section'>
        <div className="container">
            <h2>Interesting blog to read</h2>
      
        <div className='blogs-flex'>
          <Blogcards/>
        </div>
        </div>
    </section>
  )
}
