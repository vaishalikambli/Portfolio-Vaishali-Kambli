import React, { Component } from "react";
import Particles from "react-particles-js";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <React.Fragment>
        <Particles 
        className="particlesArea" 
          params={{
            particles: {
              number: {
                value: 8,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 1,
                out_mode: "out",
              },
              shape: {
                type: ["image", "circle"],
                image: [
                  {
                    src: "../../images/react.svg",
                    height: 20,
                    width: 23,
                  },
                  {
                    src: "../../images/html5.svg",
                    height: 20,
                    width: 23,
                  },
                  {
                    src: "../../images/css-3.svg",
                    height: 20,
                    width: 23,
                  },
                  {
                    src: "../../images/bootstrap-4.svg",
                    height: 20,
                    width: 23,
                  },
                  {
                    src: "../../images/javascript.svg",
                    height: 20,
                    width: 23,
                  },
                  {
                    src: "../../images/Sass.svg",
                    height: 20,
                    width: 23,
                  },
                  {
                    src: "../../images/visual-studio-code.svg",
                    height: 20,
                    width: 23,
                  }                  
                ],
              },
              color: {
                value: "#CCC",
              },
              size: {
                value: 30,
                random: false,
                anim: {
                  enable: true,
                  speed: 4,
                  size_min: 10,
                  sync: false,
                },
              },
            },
            retina_detect: false,
          }}
        />
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {name}</h1>
              <h3>
                I'm a {city} based <span>{occupation}</span>. {description}.
              </h3>
              <hr />
              <ul className="social">{networks}</ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
