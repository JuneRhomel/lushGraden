import React, { useRef } from 'react'
import "../style/login.css"
export default function Login() {

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault()
    const username = usernameRef.current.value
    const email = emailRef.current.value
    const password = usernameRef.current.value

    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <section className='login-section'>
      <div className='login-box'>
        <h2>Login</h2>
        <form onSubmit={handelSubmit}>
          <div className='input-box'>
            <label htmlFor="username">Username</label>

            <input ref={usernameRef} type="username" />
          </div>
          <div className='input-box'>
            <label htmlFor="email">Email</label>

            <input ref={emailRef} type="email" />
          </div>

          <div className='input-box'>
            <label htmlFor="password">Password</label>

            <input ref={passwordRef} type="password" />
          </div>

          <input className='btn-submit' type="submit" />

        </form>
      </div>
    </section>
  )
}
