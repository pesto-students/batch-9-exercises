/**
  Exercise:

  - Refactor App by creating a new component named `<GeoPosition>`
  - <GeoPosition> should use a child render callback that passes
    to <App> the latitude and longitude state
  - When you're done, <App> should no longer have anything but
    a render method

  Part 2:
  - Now create a <GeoAddress> component that also uses a render
    callback with the current address. You will use
    `getAddressFromCoords(latitude, longitude)` to get the
    address, it returns a promise.
  - You should be able to compose <GeoPosition> and <GeoAddress>
    beneath it to naturally compose both the UI and the state
    needed to render it
  - Make sure <GeoAddress> supports the user moving positions

  There is an image of the end result of this exercise in the root of this directory
  by the name - `render_props.png`. Good luck!

  NOTE: It is important to do this exercise using render props.
  https://reactjs.org/docs/render-props.html
 */

/* eslint-disable react/no-multi-comp */

import React from 'react';
// import PropTypes from 'prop-types';

// import getAddressFromCoords from './utils/getAddressFromCoords';

class App extends React.Component {
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
      <div>
        <h1>Geolocation</h1>
        <GeoPosition error={error} coOrdinates={coords} />
      </div>
    );
  }
}

export default App;

class GeoPosition extends React.PureComponent {
  render() {
    const { error, coOrdinates } = this.props;
    return (
      <div>
        {error ? (
          <div>Error: {error.message}</div>
      ) : (
        <dl>
          <dt>Latitude</dt>
          <dd>{coOrdinates.latitude || <LineLoader />}</dd>
          <dt>Longitude</dt>
          <dd>{coOrdinates.longitude || <LineLoader />}</dd>
        </dl>
      )}
      </div>

    );
  }
}

const LineLoader = () => (
  <div >
    <b>Loading....</b>
  </div>
);
