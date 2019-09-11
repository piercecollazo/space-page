import React, {Component} from 'react'
import Stream from './Stream'
import MapContainer from './MapContainer';

export default class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            roster: [{name: 'default'}],
            lat: 40.758498,
            long: -73.988836,
            population: 0
        }
        this.rosterFill = this.rosterFill.bind(this)
    }

    componentWillMount(){
        fetch('http://api.open-notify.org/iss-now.json')
            .then(position => {
                return position.json()
            })
            .then(data => {
                this.setState({
                    lat: data.iss_position.latitude,
                    long:data.iss_position.longitude
                })
            })
            .catch(error =>{
                console.log(error)
            })

        fetch('http://api.open-notify.org/astros.json')
            .then(roster => {
                return roster.json()
            })
            .then(data => {
                this.setState({
                    roster: data.people,
                    population: data.number
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    rosterFill(){
       return this.state.roster.forEach(person =>{
           return (<li>{person.name}</li>)
        })
    }
    render(){
        return(
        <div id='Main-view'>
        <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <Stream />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">The ISS livestream</h2>
                <p>Observe the crew hard at work, or enjoy the breathtaking live view of Earth from orbit, perhaps even getting lucky enough to watch a space walk!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="map p-5">
                <MapContainer 
                 lat={this.state.lat}
                 long={this.state.long}
                />
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">Is the ISS near?</h2>
                <p>With Google maps, we can even be kept up to date on the location of the ISS over the planet!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h1>{this.state.population} Astronauts onboard</h1>
                <button className="btn btn-primary btn-xl rounded-pill mt-5" data-toggle="modal" data-target="#roster">View Roster</button>

                <div id="roster" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">ISS Crew Roster</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        <ul>
                        {this.state.roster.map(item => {
                            return <li key={item.name}>{item.name}</li>
                        })}
                        </ul>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default"    data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Who's out there?</h2>
                <p>You can even see how many are currently stationed at the ISS, as well as view a roster of the current inhabitants</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        )
    }
}

