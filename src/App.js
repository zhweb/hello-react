import React, { Component } from 'react';
import './App.css';

import Header from "./components/header";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (

      <div className="container">
          <Header/>
          <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                <h1>Hello world</h1>
              </div>
          </div>
          <Home name={"Max"} age={12} user={'user'}>
              <p>
                  你好
                  <span>我是张恒</span>
              </p>
          </Home>
      </div>

    );
  }
}

export default App;
