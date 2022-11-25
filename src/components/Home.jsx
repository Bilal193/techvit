import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai"


function Home() {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechVet</h1>
          <p>Serving you the best possible way</p>
        </main>

      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We provide solution to all daily life problems
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate!
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>About us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sit porro odio enim temporibus ut perspiciatis amet, ullam nihil modi quibusdam aliquam neque. Cupiditate voluptas sequi assumenda, earum fugiat alias voluptates impedit ipsam laboriosam non, nobis ad tenetur reprehenderit deleniti ut dicta quidem doloribus laudantium. Nesciunt veniam debitis repellendus nisi consectetur eos officiis. Voluptas rem esse repellendus, cum optio id amet incidunt tempore sapiente, exercitationem animi provident. Quod assumenda, obcaecati explicabo officia provident reprehenderit maxime. Fugit veniam, excepturi aliquid dignissimos est fugiat quam reprehenderit neque officia libero in assumenda porro animi atque impedit rem modi alias saepe a accusantium consequatur.
          </p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={
              { animmationDelay: "0.3s" }
            } >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={
              { animmationDelay: "0.5s" }
            } >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={
              { animmationDelay: "0.7s" }
            } >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={
              { animmationDelay: "1s" }
            } >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home