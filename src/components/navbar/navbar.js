import React, { Component } from 'react';

import avatar from '../../assets/avatar.png';
import chevronDown from '../../assets/chevron-down.png';

import './navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bg">
        <div className="nav-bar">
          <div className="nav-header">
            <h1>Breeds</h1>
          </div>
          <div className="nav-menu">
            <div className="avatar">
              <img src={avatar} alt="" srcset="" />
              <img className="chevron" src={chevronDown} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
