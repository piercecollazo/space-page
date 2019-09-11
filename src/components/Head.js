import React, {Component} from 'react'
import earth from '../assets/video/Earth.mp4'

export default class Head extends Component {
    render(){
        return (
            <header className="masthead text-center text-white">
            <div className="masthead-content">
              <div className="container">
                <h1 className="masthead-heading mb-0 display-4">ISS Intercept</h1>
                <h2 className="masthead-subheading mb-0 lead">Providing up to date information on the International Space Station</h2>
              </div>
            </div>
            <video autoPlay muted loop id="background-video">    
                    <source src={earth}type="video/mp4"></source>
            </video>
          </header>
        )
    }
}