import React from 'react'
import "../style/footer.css"

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <h2>Feel free to contact us</h2>


            <div className='socail-footer'>
                <a href="">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                <i class="fa-brands fa-twitter"></i>
                </a>
            </div>

            <div>
                <nav>
                    <ul className='footer-nav'>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Plants</a>
                        </li>
                        <li>
                            <a href="">Delivery</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
  )
}
