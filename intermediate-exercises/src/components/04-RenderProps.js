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

import getAddressFromCoords from './utils/getAddressFromCoords';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null
      },
      error: null
    };
    this.updateCoordinates = this.updateCoordinates.bind(this);
  }

  updateCoordinates(position) {
    this.setState({
      coords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });
  }

  updateError(error) {
    this.setState({ error });
  }

  render() {
    return (
      <div>
        <GeoPosition
          updateCoordinates={this.updateCoordinates}
          updateError={this.updateError}
          appState={this.state}
        />
        <GeoAddress
          latitude={this.state.coords.latitude}
          longitude={this.state.coords.longitude}
        />
      </div>
    );
  }
}

class GeoPosition extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      position => {
        this.props.updateCoordinates(position);
      },
      error => {
        this.props.updateError(error);
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }
  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        {this.props.appState.error ? (
          <div>Error: {this.props.appState.error.message}</div>
        ) : (
          <dl>
            <dt>Latitude</dt>
            <dd>
              {this.props.appState.coords.latitude || (
                <p>create a loader and show here...</p>
              )}
            </dd>
            <dt>Longitude</dt>
            <dd>
              {this.props.appState.coords.longitude || (
                <p>create a loader and show here...</p>
              )}
            </dd>
          </dl>
        )}
      </div>
    );
  }
}

class GeoAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: 'fetching address....' };
  }

  componentDidMount() {
    this.getAddress();
  }

  componentDidUpdate(prevProps) {
    if (this.props.latitude !== prevProps.latitude) {
      this.getAddress();
    }
  }

  async getAddress() {
    if (this.props.latitude !== null && this.props.longitude !== null) {
      const address = await getAddressFromCoords(
        this.props.latitude,
        this.props.longitude
      );
      this.setState({
        address: ''
      });
    }
  }
  render() {
    return (
      <div>
        <h1> GeoAddress Composition</h1>
        <p> {this.state.address} </p>
      </div>
    );
  }
}

export default App;
