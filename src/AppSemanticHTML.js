import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function AppSemanticHTML() {
  const SIGN_IN = 'SIGN_IN';
  const SIGN_UP = 'SIGN_UP';
  const [activePanel, setActivePanel] = useState(SIGN_IN);

  const Header = () => {
    return (
      <header>
        <figure>
          <img className="logo" src={logo} alt="Company logo"/>
        </figure>
        <Nav />
      </header>
    );
  }

  const Nav = () => {
    return (
      <nav>
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
    const selectedClass = 'tab--item__selected';

    return (
      <ul className="tab--list">
          <li
            className={`
              tab--item 
              ${activePanel === SIGN_IN ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_IN)}
          >Sign In</li>
          <li
            className={`
              tab--item 
              ${activePanel === SIGN_UP ? selectedClass : ''}
            `}
            onClick={() => setActivePanel(SIGN_UP)}
          >Sign Up</li>
      </ul>
    );
  }

  const SignIn = () => {
    return (
      <div className="form--container">
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
      <div className="form--container">
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
      <main className="tab--container">
        <TabList />
        { 
          activePanel === SIGN_IN ? 
          <SignIn /> : 
          <SignUp /> 
        }
      </main>
    </div>
  );
}

export default AppSemanticHTML;
