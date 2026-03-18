import React, { useState } from 'react'
import "./style.css";

function Description() {
    const[readmore,setReadMore]=useState(false);
  return (
    <section className='description'>
        <h1>About Me</h1>

        <p>{readmore?'B.E. Computer Science Engineering graduate with hands-on knowledge of React and Python, and a strong foundation in JavaScript and CSS. Passionate about web development and always eager to learn, I look forward to continuously growing my skills while contributing to the development of meaningful and user-friendly web applications.' :'B.E. Computer Science Engineering graduate with hands-on knowledge of React and Python, and a strong foundation in JavaScript and CSS. Passionate about web development ....'}</p>

        <button onClick={()=>setReadMore(!readmore)}>{readmore?'read less':'read more'}</button>
    </section>
  )
}

export default Description;