import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function AppARIA() {
  const SIGN_IN = 'SIGN_IN';
  const SIGN_UP = 'SIGN_UP';
  const [activePanel, setActivePanel] = useState(SIGN_IN);

  const Header = () => {
    return (
      <header>
        <figure aria-label="The company logo">
          <img className="header--logo" src={logo} alt="Company logo"/>
        </figure>
        <h1 className="header--title">Example with ARIA Attributes</h1>
        <Nav />
      </header>
    );
  }

  const Nav = () => {
    return (
      <nav className="nav--container" aria-label="Main navigation">
        <ul className="nav--list">
          <li className="nav--item">
            <a 
              className="nav--link" 
              href="/blog"
              data-test-id="blog_link"
              aria-label="Blog, Visit our engineering blog"
              >Blog</a>
          </li>
          <li className="nav--item">
            <a 
              className="nav--link" 
              href="/jobs"
              data-test-id="jobs_link"
              aria-label="Jobs, See our open positions and be part of our team"
              >Jobs</a>
          </li>
          <li className="nav--item">
            <a 
              className="nav--link" 
              href="/contact-us"
              data-test-id="contact_us_link"
              aria-label="Contact us, Get in touch with us"
            >Contact us</a>
          </li>
        </ul>
      </nav>
    );
  }

  const TabList = () => {
    const KEY_ENTER = 13;
    const selectedClass = 'tab--item__selected';
    const isSelected = (tab) => activePanel === tab;

    function handleKeyDown(event, panelToActivate) {
      if (event.which === KEY_ENTER) {
        setActivePanel(panelToActivate);
      }
    }

    return (
      <ul role="tablist" aria-label="Log in tab list with options" className="tab--list">
          <li
            id="sign_in--tab"
            role="tab"
            aria-controls="sign_in--panel"
            aria-selected={isSelected(SIGN_IN)}
            aria-label="Sign in tab item"
            tabIndex="0"
            data-test-id="sign_in_tab"
            className={`
              tab--item 
              ${activePanel === SIGN_IN ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_IN)}
            onKeyDown={(e) => handleKeyDown(e, SIGN_IN)}
          >
            Sign In
          </li>
          <li
            id="sign_up--tab" 
            role="tab"
            aria-controls="sign_up--panel"
            aria-selected={isSelected(SIGN_UP)}
            aria-label="Sign up tab item"
            tabIndex="0"
            data-test-id="sign_up_tab"
            className={`
              tab--item 
              ${activePanel === SIGN_UP ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_UP)}
            onKeyDown={(e) => handleKeyDown(e, SIGN_UP)}
          >
            Sign Up
          </li>
      </ul>
    );
  }

  const SignIn = () => {
    return (
      <div 
        id="sign_in--panel" 
        className="form--container" 
        role="tabpanel"
        aria-label="Sign in form"
      >
        <form>
          <label className="form--label" htmlFor="email">E-mail</label>
          <input className="form--input" type="text" name="email" id="email" placeholder="foo@bar.com" />
          <label className="form--label" htmlFor="password">Password</label>
          <input className="form--input" type="password" name="password" id="password" />
          <button 
            className="form--button"
            type="submit"
            aria-label="Click to submit the Sign In form"
          >Sign In</button>
        </form>
      </div>
    );
  }

  const SignUp = () => {
    function handleSignUp() {

    }
    
    return (
      <div 
        id="sign_up--panel" 
        className="form--container" 
        role="tabpanel"
        aria-label="Sign up form"
      >
        <form onSubmit={() => handleSignUp()}>
          <label className="form--label" htmlFor="email">E-mail</label>
          <input className="form--input" type="text" name="email" id="email" placeholder="foo@bar.com" />
          <label className="form--label" htmlFor="password">Password</label>
          <input className="form--input" type="password" name="password" id="password" />
          <label className="form--label" htmlFor="confirmPassword">Confirm password</label>
          <input className="form--input" type="password" name="confirmPassword" id="confirmPassword" />
          <button 
            className="form--button"
            type="submit"
            aria-label="Click to submit the Sign Up form"
          >Sign Up</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="tab--container">
        <TabList />
        { 
          activePanel === SIGN_IN ? 
          <SignIn /> : 
          <SignUp /> 
        }
    </section>
    </div>
  );
}

export default AppARIA;
