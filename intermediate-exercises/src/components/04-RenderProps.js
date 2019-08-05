/* eslint-disable react/no-multi-comp */

import React from 'react';
// import PropTypes from 'prop-types';

import getAddressFromCoords from './utils/getAddressFromCoords';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        <GeoPosition render={props => (
          <div>
          <GeoPositionDiv {...props} />
          <GeoAddress {...props} />
          </div>
        )}

        />
      </div>
    );
  }
}

export default App;

class GeoPositionDiv extends React.PureComponent {
  render() {
    const { error, coords } = this.props;
    return (
      <div>
        {error ? (
          <div>
Error:
            {' '}
            {error.message}
          </div>
        ) : (
          <dl>
            <dt>Latitude</dt>
            <dd>{coords.latitude || <LineLoader />}</dd>
            <dt>Longitude</dt>
            <dd>{coords.longitude || <LineLoader />}</dd>
          </dl>
        )}
      </div>

    );
  }
}
class GeoPosition extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null,
      },
      error: null,
    };
  }

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        this.setState({ error });
      },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    const { error, coords } = this.state;
    return (
      this.props.render({
        error,
        coords,
      })
    );
  }
}

class GeoAddress extends React.PureComponent {
  state = { address:null }
  updateAddress = this.updateAddress.bind(this);

  componentDidUpdate(prevProps,prevState) {
    const { coords } = this.props;
    if(coords && prevProps.coords !== coords) {
      const latitudesAreSame = coords.latitude === prevProps.coords.latitude ;
      const longitudesAreSame = coords.longitude === prevProps.coords.longitude;
      if(!latitudesAreSame || !longitudesAreSame){
            this.updateAddress()
      }
    }
  }
  updateAddress(){
    const {coords} = this.props;
    if(coords){
        getAddressFromCoords(coords.latitude, coords.longitude).then((address) => {
          this.setState({address})
        })
    }
  }

  render(){
    const { address } = this.state;
    return(
      <div>
        <h1>Geo Address Composition</h1>
        <div>{address? <p>{JSON.stringify(address)}</p> : <LineLoader /> }</div>
      </div>
    )
  }
}
const LineLoader = () => (
  <div>
    <b>Loading....</b>
  </div>
);
