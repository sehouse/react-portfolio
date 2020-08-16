/* eslint-disable no-unused-vars */
import React from 'react';
import introLogo from '../scott-house.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
import Particles from 'react-particles-js';

const Hero = (props) => {

    const data = props.portfolioData;

    return (
        <section className="site-intro site-intro--with-clipmask" >
            <Particles
                className="site-intro__canvas"

            />
            <div className="container">
                <div className="site-intro__wrapper">
                    <div className="site-intro__main">
                        <div className="site-intro__intro">
                            <h2 className="site-intro__name"> Hi. I'm {data.name} </h2>
                            <h2 className="site-intro__heading"> I'm a {data.role}. </h2>
                            <h1 className="site-intro__primary"> {data.intro} </h1>
                            <div className="site-intro__action">
                                <Link
                                    className="btn btn-outline-white btn-radius btn-lg"
                                    to="project"
                                    href="#project"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                >
                                    See My Portfolio!
	          </Link>
                            </div>
                        </div>
                    </div>
                    <div className="site-intro__logo-wrapper">
                        <img src={introLogo} alt="" className="site-intro__logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;