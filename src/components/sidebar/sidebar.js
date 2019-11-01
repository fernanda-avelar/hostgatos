import React, { Component } from 'react';
import logo from '../../assets/marca-hostgatos.svg';
import paw from '../../assets/paw.png';
import feedback from '../../assets/feedback.png';

import './sidebar.css';

export default class sidebar extends Component {
  render() {
    return (
      <div className="side-bar-bg">
        <div className="side-bar">
          <div className="side-logo">
            <img src={logo} alt="" srcset="" />
          </div>
          <hr />
          <div className="menu">
            <div className="menu-item">
              <div className="menu-icon">
                <img src={paw} alt="" srcset="" />
              </div>
              <h3>Breeds</h3>
            </div>
            <div className="menu-item">
              <div className="menu-icon">
                <img src={feedback} alt="" srcset="" />
              </div>
              <h3>Feedback</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
