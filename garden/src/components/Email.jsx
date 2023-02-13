import React from 'react'
import "../style/email.css"
export default function Email() {
    return (
        <section className='section-email'>

            <div className="container">
                <div className='center-email'>
                    <h2>Enter your email address for our mailing Promo or other interesting things</h2>
                    <form action="">
                        <input type="email" placeholder='Enter your email' />
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
