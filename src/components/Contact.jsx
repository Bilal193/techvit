import React from 'react'
import { useState } from 'react'
import '../styles/Contact.scss'


function Contact() {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [message,setMessage]=useState();
  const [disableBtn,setDisablebtn]=useState(false);
  console.log(name,email,message);
  const submitHandler=(e)=>{
    e.preventDefault();
    setDisablebtn(true);
  }
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={submitHandler}>

          <div>
            <label>Name</label>
            <input type="text" value={name}  onChange={e=>setName(e.target.value)} required placeholder='type your Name' />
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder='example@abc.com' />
          </div>
          <div>
            <label>Message</label>
            <input type="text" value={message} onChange={e=>setMessage(e.target.value)} required placeholder='Input your query here.....' />
          </div>

          <button disabled={disableBtn} className={disableBtn ? "disableBtn":""} type='submit'>Submit</button>
        </form>
      </main>
    </div>

  )
}

export default Contact