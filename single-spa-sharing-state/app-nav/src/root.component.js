import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import { getState, store } from '@macro/app-utils';

export default function Root(props) {
  const [state, setState] = useState(getState.isAuthenticated);
  const [storeState, setStoreState] = useState(null)

  useEffect(() => {
    const subscription = store.subscribe( data => setStoreState(data.state));
    
    return () => {
      subscription.unsubscribe();
      
    }
  }, [])

  function clickHandler() {
    getState.setAuthState = !getState.isAuthenticated;
    console.log("NAV AUTH =>", getState.isAuthenticated);
    setState(prevState => !prevState)
  }


  return (
    <BrowserRouter>
      <section className="app-nav">
        <div>
          <div className="login-group">
            <h3><pre>@macro/nav</pre> component.</h3>
            <Button state={state} clickHandler={clickHandler} />
          </div>
          <div className="nav">
            <ul>
              <li><NavLink to="/" className="link">Dashboard</NavLink></li>
              <li><NavLink to="/mealplan" className="link">Meal Plan</NavLink></li>
              <li><NavLink to="/workouts" className="link">Workouts</NavLink></li>
            </ul>
            
          </div>
          <br />
          <div className="dev-description">
          <h4>Shared state from Single-SPA Utility modules</h4>
          <div>
            <div>
              <p>RxJS State:</p>
              <p><b>{storeState}</b></p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

function Button( {state, clickHandler} ) {
  return (
    <div className="login">
      <p>{state ? "Authenticated user" : "Not authenticated"}</p>
      <button onClick={clickHandler}>{state ? "Logout" : "Login"}</button>
    </div>
  )
}

