import React from 'react'
import icon1 from "../assets/html.png"
import icon2 from "../assets/css.png"
import icon3 from "../assets/js.png"
import icon4 from "../assets/react.png"
import icon5 from "../assets/mysql.png"
import icon6 from "../assets/git.png"
import icon7 from "../assets/github1.png"
import icon8 from "../assets/python.png"

function Skills() {
  return (
    <section className='Skills'>
        <h1>Skills</h1>
        <div className="frontend">
            <h2>Frontend Development:</h2>
            <div><img src={icon1}/><h4>HTML5</h4></div>
            <div><img src={icon2}/><h4>CSS3</h4></div>
            <div><img src={icon3}/><h4>JAVASCRIPT</h4></div>
            <div><img src={icon4}/><h4>REACT JS</h4></div>
            
        </div>

        <div className="others">
            <h2>Otherskills:</h2>
            <div><img src={icon5}/><h4>MY SQL</h4></div>
            <div><img src={icon6}/><h4>GIT</h4></div>
            <div><img src={icon7} width="100px"/><h4>GITHUB</h4></div>
            <div><img src={icon8} width="100px"/><h4>PYTHON</h4></div>
        </div>
    </section>
  )
}

export default Skills;