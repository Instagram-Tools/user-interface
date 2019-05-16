import React, { Component } from 'react';
import { Context } from './Context';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import console from './Log';

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
            className="menubar menubar_interface_page w-nav"
          >
            <div className="menubarleft animation">
              <h4 className="titlelogo useon">Use on</h4>
            </div>
            <div className="menubarleft landingpage_left">
              <NavLink
                to="/"
                className="titlelogo legallogo"
                style={{ zIndex: 999 }}
                activeClassName="w--current"
              />
              <div className="container w-container">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div className="just_because_the_fucking_nav_menu_wont_distribute">
                    <h4 className="titlelogo landinglogo" />
                    <div className="nav_menu_half">
                      <NavLink
                        to="/"
                        className="title_menu_element landingpage_element pink_parrot_banner w-nav-link"
                        activeClassName="w--current"
                      >
                        PINK PARROT
                      </NavLink>
                      <NavLink
                        to="/interface"
                        className="title_menu_element landingpage_element w-nav-link"
                        activeClassName="w--current"
                        onClick={this.clickOnLogin(context)}
                      >
                        INTERFACE
                      </NavLink>
                      {this.isLoggedin(context) ? (
                        <NavLink
                          activeClassName="w--current"
                          to="/settings"
                          className="title_menu_element landingpage_element w-nav-link"
                        >
                          SETTINGS
                        </NavLink>
                      ) : null}
                      <NavHashLink
                        activeClassName="w--current"
                        smooth
                        to="/#pricing"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        PRICING
                      </NavHashLink>
                      <NavLink
                        activeClassName="w--current"
                        to="/legal"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        LEGAL
                      </NavLink>
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
                data-w-id="8d5f7b83-fdac-39cd-2c99-cdb95595f824"
                className="menu-button w-nav-button"
              >
                <div className="menuicon w-icon-nav-menu" />
              </div>
            </div>
            <div className="menubarleft landingpage_left settingsicon w-clearfix">
              <div className="notificationcircle">1</div>
              <div className="general_help_icon">?</div>
              {this.loginButton(context)}
            </div>
            {this.navOverlay(context)}
          </div>
        )}
      </Context.Consumer>
    );
  }

  loginButton(context) {
    if (!this.isLoggedin(context))
      return (
        <NavLink
          to="/interface"
          onClick={this.clickOnLogin(context)}
          className="title_menu_element landingpage_element loginlogout homelogin w-nav-link"
        >
          Login
        </NavLink>
      );
    else
      return (
        <a
          href="/interface"
          onClick={this.clickOnLogout(context)}
          className="title_menu_element landingpage_element loginlogout homelogin w-nav-link"
        >
          logout
        </a>
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
            <div className="nav_menu_half">
              <NavLink
                to="/"
                className="title_menu_element landingpage_element pink_parrot_banner w-nav-link w--nav-link-open"
              >
                PINK PARROT
              </NavLink>
              <NavLink
                to="/interface"
                onClick={this.clickOnLogin(context)}
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                INTERFACE
              </NavLink>
              {this.isLoggedin(context) ? (
                <NavLink
                  to="/settings"
                  className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
                >
                  SETTINGS
                </NavLink>
              ) : null}
              <NavHashLink
                smooth
                to="/#pricing"
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                PRICING
              </NavHashLink>
              <NavLink
                to="/legal"
                className="title_menu_element landingpage_element w-nav-link w--nav-link-open"
              >
                LEGAL
              </NavLink>
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

  clickOnLogout(context) {
    return () => console.log('clickOnLogout');
  }
}
