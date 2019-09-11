import React, {Component} from 'react'

export default class Stream extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">
                  <a className="navbar-brand" href="/#">ISS Intercept</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"           data-target="#navbarResponsive" aria-controls="navbarResponsive"        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/#">Github</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#">Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        )
    }
}
