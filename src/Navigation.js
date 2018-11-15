import React, { Component } from 'react';
import { Context } from './Context';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  state = {
    toggled: false
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            className="menubar menubar_landing_page w-nav"
          >
            <div className="menubarleft landingpage_left">
              <NavLink
                to="/"
                className="titlelogo legallogo homelogo w--current"
              />
              <div className="container w-container">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div className="just_because_the_fucking_nav_menu_wont_distribute">
                    <h4 className="titlelogo landinglogo" />
                    <div className="nav_menu_half">
                      <NavLink
                        className="title_menu_element landingpage_element w-nav-link"
                        to="/interface"
                        onClick={this.clickOnLogin(context)}
                      >
                        INTERFACE
                      </NavLink>
                      <NavLink
                        to="#"
                        className="title_menu_element feature_in_development w-nav-link"
                      >
                        Community
                      </NavLink>
                      <NavLink
                        to="#"
                        className="title_menu_element feature_in_development w-nav-link"
                      >
                        Your statistics
                      </NavLink>
                      <NavLink
                        to="/about"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        ABOUT
                      </NavLink>
                      <NavLink
                        to="/about#pricing"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        PRICING
                      </NavLink>
                      <NavLink
                        to="/legal"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        LEGAL
                      </NavLink>
                    </div>
                    <div className="nav_menu_half righthalf">
                      <NavLink
                        to="#"
                        className="title_menu_element right profile_name_in_nav_menu w-nav-link"
                      >
                        Tash Sultana
                      </NavLink>
                      <div className="profilepic profile_pic_in_nav_menu" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div
              className="menubarright feature_in_development"
              onClick={this.toggle.bind(this)}
            >
              <div
                data-w-id="72205cee-9f07-ab14-c8ac-5697860317d1"
                className="menu-button w-nav-button"
              >
                <div className="menuicon w-icon-nav-menu" />
              </div>
              <h2 className="title_menu_element right">Tash Sultana</h2>
              <div className="profilepic" />
            </div>
            <div className="menubarleft landingpage_left settingsicon homelogin">
              <NavLink
                to="/interface"
                onClick={this.clickOnLogin(context)}
                className="title_menu_element landingpage_element loginlogout homelogin w-nav-link"
              >
                login
              </NavLink>
              <NavLink
                to="/interface"
                onClick={this.clickOnLogin(context)}
                className="title_menu_element landingpage_element loginlogout responsive w-nav-link"
              >
                login
              </NavLink>
            </div>
            {this.navOverlay(context)}
          </div>
        )}
      </Context.Consumer>
    );
  }

  toggle() {
    this.setState(p => ({ toggled: !p.toggled }));
  }

  navOverlay(context) {
    return (
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        style={
          this.state.toggled
            ? {
                display: 'inherit',
                overflow: 'inherit'
              }
            : {}
        }
      >
        <nav role="navigation" className="nav-menu w-nav-menu w--nav-menu-open">
          <div className="just_because_the_fucking_nav_menu_wont_distribute">
            <h4 className="titlelogo landinglogo" />
            <div className="nav_menu_half">
              <NavLink
                to="/interface"
                onClick={this.clickOnLogin(context)}
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                INTERFACE
              </NavLink>
              <NavLink
                to="#"
                className="title_menu_element feature_in_development w-nav-link w--nav-link-open"
              >
                Community
              </NavLink>
              <NavLink
                to="#"
                className="title_menu_element feature_in_development w-nav-link w--nav-link-open"
              >
                Your statistics
              </NavLink>
              <NavLink
                to="/about"
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/about#pricing"
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                PRICING
              </NavLink>
              <NavLink
                to="/legal"
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                LEGAL
              </NavLink>
            </div>
            <div className="nav_menu_half righthalf">
              <NavLink
                to="#"
                className="title_menu_element right profile_name_in_nav_menu w-nav-link w--nav-link-open"
              >
                Tash Sultana
              </NavLink>
              <div className="profilepic profile_pic_in_nav_menu" />
            </div>
          </div>
        </nav>
      </div>
    );
  }

  clickOnLogin(context) {
    return !this.isLoggedin(context) ? this.login.bind(context) : null;
  }

  login() {
    this.setState({ registrationStep: 11 });
  }

  isLoggedin(context) {
    return context.state.email && context.state.e_password;
  }
}
