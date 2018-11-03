import React, { Component } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/code-connect.webflow.css';

export default class App extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="landing_content_wrap">
          <h1 className="titlepage landingtitle">
            Growthhack human Engagement.
          </h1>
          <div className="titlepage landingsubtitle">
            Your Insta account has deserved it.
          </div>
          <div className="titlepage landingtext">
            <strong>Pink Parrot</strong> is the best, safest and easiest to use
            Instagram bot.
          </div>
          <div className="usp_wrap">
            <div className="usp">
              <div className="uspicon" />
              <div className="titlepage usptext">Catch me if you can</div>
              <div className="titlepage usptext subtext">
                The bot simulates being a mobile phone. Thus most safe.
              </div>
              <a href="#" className="more_info_button">
                Learn more
              </a>
            </div>
            <div className="usp">
              <div className="uspicon sniper" />
              <div className="titlepage usptext">Sniper targeting</div>
              <div className="titlepage usptext subtext">
                You reach exactly who you want. Organically.
              </div>
              <a href="#" className="more_info_button">
                Learn more
              </a>
            </div>
            <div className="usp">
              <div className="uspicon privacyicon" />
              <div className="titlepage usptext">Privacy</div>
              <div className="titlepage usptext subtext">
                Your data is not saved. You&#x27;re the only one who can access
                your insta.
              </div>
              <a href="#" className="more_info_button">
                Learn more
              </a>
            </div>
            <div className="usp">
              <div className="uspicon alwaysonicon" />
              <div className="titlepage usptext">Bot works. Securely.</div>
              <div className="titlepage usptext subtext">
                It&#x27;s on a server. Works even when your devices are off. In
                a uniquely secure way.
              </div>
              <a href="#" className="more_info_button">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
