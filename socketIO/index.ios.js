/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { App } from "./Components/app.js";

export default class socketIO extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('socketIO', () => socketIO);
