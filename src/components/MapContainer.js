import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
const style = {
    width: '100%',
    height: '400px'
  }
  
// Still unsure why this isn't live updating properly. Perhaps an issue with the state no longer being passed along after the initial mounting in Main.js?
export class MapContainer extends React.Component {


    onMarkerClick = () => {

    }

    onInfoWindowClose = () => {

    }

    render() {
        return (
            <Map 
                google={window.google} 
                zoom={5}
                style={style}
                initialCenter={{lat:this.props.lat, lng:this.props.long}}
                >
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{`Hi hello`}</h1>
                </div>
            </InfoWindow>
          </Map>
        )
    }

}
 
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_KEY
})(MapContainer);
   

