import React, { Component } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/pinkparrot-internjamesbond007.webflow.css';
import { HashLink } from 'react-router-hash-link';
import About from './About';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="landingpage">
          <div className="landing_content_wrap">
            <h1 className="titlepage landingtitle">
              Growth Hack Human Engagement.
            </h1>
            <div className="titlepage landingsubtitle">
              Your Insta account deserves it.
            </div>
            <div className="titlepage landingtext">
              <strong>Pink Parrot</strong> is the best, safest, and easiest to
              use Instagram bot.
            </div>
            <div className="usp_wrap">
              <div id="w-node-8f45982eb615-1b786f28" className="usp uspleft">
                <div className="uspicon" />
                <div className="titlepage usptext">Catch me if you can</div>
                <div className="titlepage usptext subtext">
                  The bot simulates being a mobile phone. Thus most safe.
                </div>
                <HashLink
                  smooth
                  to="#whatstatement"
                  className="more_info_button"
                >
                  Learn more
                </HashLink>
              </div>
              <div id="w-node-b6d3c275123f-1b786f28" className="usp uspright">
                <div className="uspicon sniper righticon" />
                <div className="titlepage usptext righttext">
                  Sniper targeting
                </div>
                <div className="titlepage usptext subtext righttext">
                  You reach exactly who you want. Organically.
                </div>
                <HashLink
                  smooth
                  to="#whatstatement"
                  className="more_info_button"
                >
                  Learn more
                </HashLink>
              </div>
              <div id="w-node-6a47229be18e-1b786f28" className="usp uspleft">
                <div className="uspicon privacyicon" />
                <div className="titlepage usptext">Privacy</div>
                <div className="titlepage usptext subtext">
                  Your data is not saved. You&#x27;re the only one who can
                  access your insta.
                </div>
                <HashLink
                  smooth
                  to="#whatstatement"
                  className="more_info_button"
                >
                  Learn more
                </HashLink>
              </div>
              <div id="w-node-d63bd21a43a5-1b786f28" className="usp uspright">
                <div className="uspicon alwaysonicon righticon lasticon" />
                <div className="titlepage usptext righttext">
                  Bot works. Whenever.
                </div>
                <div className="titlepage usptext subtext righttext">
                  It&#x27;s on a server. Works even when your devices are off.
                </div>
                <HashLink
                  smooth
                  to="#whatstatement"
                  className="more_info_button"
                >
                  Learn more
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        <h1 className="titlepage abouttitle new_about_title">
          Everyone&#x27;s gotta bring home the bacon. Our way pushes you to the
          next level of social media success.<span className="text-span-5">
            <br />
            <br />
          </span>
        </h1>
        <About />
      </div>
    );
  }
}
