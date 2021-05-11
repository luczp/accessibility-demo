import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const SIGN_IN = 'SIGN_IN';
  const SIGN_UP = 'SIGN_UP';
  const [activePanel, setActivePanel] = useState(SIGN_IN);

  const Header = () => {
    return (
      <header>
        <figure aria-label="The company logo">
          <img className="logo" src={logo} alt="Company logo"/>
        </figure>
        <Nav />
      </header>
    );
  }

  const Nav = () => {
    return (
      <nav aria-label="Main navigation">
        <ul className="nav--list">
          <li className="nav--item">
            <a className="nav--link" href="/blog">Blog</a>
          </li>
          <li className="nav--item">
            <a className="nav--link" href="/blog">Jobs</a>
          </li>
          <li className="nav--item">
            <a className="nav--link" href="/blog">Contact us</a>
          </li>
        </ul>
      </nav>
    );
  }

  const TabList = () => {
    const KEY_ENTER = 13;
    const selectedClass = 'tab--item__selected';
    const isSelected = (tab) => activePanel === tab;

    function handleKeyPress(event, panelToActivate) {
      if (event.which === KEY_ENTER) {
        setActivePanel(panelToActivate);
      }
    }

    return (
      <ul role="tablist" aria-label="Log in tab list" className="tab--list">
          <li
            id="sign_in--tab"
            role="tab"
            aria-controls="sign_in--panel"
            aria-selected={isSelected(SIGN_IN)}
            aria-label="Sign in tab item"
            tabIndex="0"
            className={`
              tab--item 
              ${activePanel === SIGN_IN ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_IN)}
            onKeyPress={(e) => handleKeyPress(e, SIGN_IN)}
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
            className={`
              tab--item 
              ${activePanel === SIGN_UP ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_UP)}
            onKeyPress={(e) => handleKeyPress(e, SIGN_UP)}
          >
            Sign Up
          </li>
      </ul>
    );
  }

  const SignIn = () => {
    return (
      <div 
        id="sign_up--panel" 
        className="form--container" 
        role="tabpanel"
        aria-label="Sign in form"
      >
        <form>
          <label className="form--label" htmlFor="email">E-mail</label>
          <input className="form--input" type="text" name="email" id="email" placeholder="foo@bar.com" />
          <label className="form--label" htmlFor="password">Password</label>
          <input className="form--input" type="password" name="password" id="password" />
          <button className="form--button">Sign In</button>
        </form>
      </div>
    );
  }

  const SignUp = () => {
    return (
      <div 
        id="sign_in--panel" 
        className="form--container" 
        role="tabpanel"
        aria-label="Sign up form"
      >
        <form>
          <label className="form--label" htmlFor="email">E-mail</label>
          <input className="form--input" type="text" name="email" id="email" placeholder="foo@bar.com" />
          <label className="form--label" htmlFor="password">Password</label>
          <input className="form--input" type="password" name="password" id="password" />
          <label className="form--label" htmlFor="confirmPassword">Confirm password</label>
          <input className="form--input" type="password" name="confirmPassword" id="confirmPassword" />
          <button className="form--button">Sign Up</button>
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

export default App;
