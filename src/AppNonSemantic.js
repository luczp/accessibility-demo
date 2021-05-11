import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function AppNonSemantic() {
  const SIGN_IN = 'SIGN_IN';
  const SIGN_UP = 'SIGN_UP';
  const [activePanel, setActivePanel] = useState(SIGN_IN);

  const Header = () => {
    return (
      <div>
        <img className="logo" src={logo} />
        <Nav />
      </div>
    );
  }

  const Nav = () => {
    return (
      <div className="nav--list">
        <div className="nav--item">
          <a className="nav--link" href="/blog">Blog</a>
        </div>
        <div className="nav--item">
          <a className="nav--link" href="/blog">Jobs</a>
        </div>
        <div className="nav--item">
          <a className="nav--link" href="/blog">Contact us</a>
        </div>
      </div>
    );
  }

  const TabList = () => {
    const selectedClass = 'tab--item__selected';

    return (
      <div className="tab--list">
          <div
            className={`
              tab--item 
              ${activePanel === SIGN_IN ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_IN)}
          >
            Sign In
          </div>
          <div
            className={`
              tab--item 
              ${activePanel === SIGN_UP ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_UP)}
          >
            Sign Up
          </div>
      </div>
    );
  }

  const SignIn = () => {
    return (
      <div className="form--container">
        <form>
          <label className="form--label">E-mail</label>
          <input className="form--input" />
          <label className="form--label">Password</label>
          <input className="form--input" />
          <a href="#" className="form--link">Sign In</a>
        </form>
      </div>
    );
  }

  const SignUp = () => {
    return (
      <div className="form--container">
        <form>
          <label className="form--label">E-mail</label>
          <input className="form--input" />
          <label className="form--label">Password</label>
          <input className="form--input" />
          <label className="form--label">Confirm password</label>
          <input className="form--input" />
          <a href="#" className="form--link">Sign Up</a>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="tab--container">
        <TabList />
        { 
          activePanel === SIGN_IN ? 
          <SignIn /> : 
          <SignUp /> 
        }
      </div>
    </div>
  );
}

export default AppNonSemantic;
