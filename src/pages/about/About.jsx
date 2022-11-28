import React from "react";
import './About.scss';
import bg from '../../assets/footer-bg.jpg'

const About = () => {
  return (
    <div className="about" style={{backgroundImage: `url(${bg})`}}>
      <div className="about-app">
        <h1>About APP</h1><br />
        <h2>This application will show you anykind of movies.</h2>
        <h2>.</h2>
        <h2>.</h2>
        <h2>.</h2><br />
        <h3>Enjoy it</h3><br />
      </div>
      <div className="about-dev">
        <h1> About Me </h1>

      </div>
      <div className="dev-pro">
        {/* <img src={dev} alt="" /> */}
        <div className="dev-id">
          <div className="a">
            <h4>Name </h4><br />
            <h4>NIM </h4><br />
            <h4>University </h4><br />
            <h4>Faculty </h4><br />
            <h4>Major </h4>
          </div>
          <div className="b">
            <h4>: M. Fitra Ariasaputra</h4><br />
            <h4>: 21120120140160</h4><br />
            <h4>: Diponegoro University</h4><br />
            <h4>: Faculty of Engineering</h4><br />
            <h4>: Computer Engineering</h4>
          </div>
        </div>

      </div>




    </div>

  )
}

export default About