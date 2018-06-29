import React, { Component } from 'react';
import './css/code-connect.webflow.css';
import iPhone from './images/iPhone-X-icon.svg';
import iPad from './images/iPad-icon.svg';
import macBook from './images/MacBook-icon.svg';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div
          data-w-id="5bf9847b-11fd-dd49-fb60-fb016f780822"
          className="progressbar"
        />

        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          className="menubar w-nav"
        >
          <div
            data-w-id="159be7c4-821c-307a-8db6-ce0facef021a"
            className="menubarleft animation"
          >
            <h4
              data-w-id="9dbc5513-0172-9d82-e123-81988cd96620"
              className="titlelogo useon"
            >
              Use on
            </h4>
            <img
              src={iPhone}
              data-w-id="78f29f2c-a0a9-fe05-4d18-4920df696a77"
              className="devicesicon"
            />
            <img
              src={iPad}
              data-w-id="4468d356-10bf-f014-a55b-653048e8e5c3"
              className="devicesicon"
            />
            <img
              src={macBook}
              data-w-id="a5c12e64-2d00-0a09-cbdb-cf54a0c7d6dc"
              className="devicesicon"
            />
          </div>
          <div className="menubarleft">
            <h4
              data-w-id="a1b87f0f-1fc2-95f6-8f8d-5866c6f1df17"
              className="titlelogo"
            >
              NotInstagress
            </h4>
            <div className="container w-container">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="just_because_the_fucking_nav_menu_wont_distribute">
                  <div className="nav_menu_half">
                    <a href="#" className="title_menu_element w-nav-link">
                      Bot
                    </a>
                    <a href="#" className="title_menu_element w-nav-link">
                      Community
                    </a>
                    <a href="#" className="title_menu_element w-nav-link">
                      Your statistics
                    </a>
                    <a href="#" className="title_menu_element w-nav-link">
                      About
                    </a>
                    <a href="#" className="title_menu_element w-nav-link">
                      Legal
                    </a>
                    <a href="#" className="title_menu_element w-nav-link">
                      Pricing
                    </a>
                  </div>
                  <div className="nav_menu_half righthalf">
                    <a
                      href="#"
                      className="title_menu_element right profile_name_in_nav_menu w-nav-link"
                    >
                      Tash Sultana
                    </a>
                    <div className="profilepic profile_pic_in_nav_menu" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="menubarright">
            <div
              data-w-id="16d541d2-66fb-d215-07d7-75eafc2917f1"
              className="menu-button w-nav-button"
            >
              <div className="menuicon w-icon-nav-menu" />
            </div>
            <h2 className="title_menu_element right">Tash Sultana</h2>
            <div className="profilepic" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
