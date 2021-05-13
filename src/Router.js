import React, { useState } from 'react';
import AppNonSemantic from './AppNonSemantic';
import AppSemanticHTML from './AppSemanticHTML';
import AppARIA from './AppARIA';

function Router() {
  const [route, setRoute] = useState('')

  function handleRouter(event) {
    setRoute(event.target.dataset.route)
  }

  function renderView() {
    switch (route) {
      case 'AppARIA':
        return <AppARIA />
      case 'AppSemantic':
        return <AppSemanticHTML />
      case 'AppNonSemantic':
          return <AppNonSemantic />
      default:
        return <AppSemanticHTML />
    }
  }

  return (
    <nav>
      <ul className="nav--list" tabIndex="-1">
        {/* <li className="nav--item">
          <a 
            href="#"
            data-route="AppNonSemantic" 
            onClick={(e) => handleRouter(e)}
          >Example with no semantics</a>
        </li> */}
        <li className="nav--item" tabIndex="-1">
          <a 
            href="#"
            data-route="AppSemantic" 
            onClick={(e) => handleRouter(e)}
          >
            Example I
          </a>
        </li>
        <li className="nav--item" tabIndex="-1">
          <a 
            href="#"
            data-route="AppARIA"
            onClick={(e) => handleRouter(e)}
          >
            Example II
          </a>
        </li>
      </ul>
      { renderView() }
    </nav>
  )
}

export default Router;