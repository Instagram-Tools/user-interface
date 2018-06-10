import React, { Component } from 'react';
import './webflow.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div
          data-w-id="5bf9847b-11fd-dd49-fb60-fb016f780822"
          className="progressbar"
        />
        <div className="menubar">
          <div className="menubarleft">
            <h4 className="titlelogo">NotInstagress</h4>
            <h2 className="title_menu_element">Bot</h2>
            <h2 className="title_menu_element">Community</h2>
            <h2 className="title_menu_element">About</h2>
            <h2 className="title_menu_element">Legal</h2>
            <h2 className="title_menu_element">Pricing</h2>
          </div>
          <div className="menubarright">
            <h2 className="title_menu_element right">Tash Sultana</h2>
            <div className="div-block" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
