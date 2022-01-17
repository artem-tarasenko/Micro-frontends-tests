import React, { useState, useEffect } from 'react';
import { store } from '@macro/app-utils';
import { addListener, removeListener } from './customEvents';
import { ErrorBoundary } from './error';
// import Reactstandalone from 'Reactstandalone'

const RemoteButton = React.lazy(() => import("app2/Button"));
// const RemoteList = React.lazy(() => import("app3010/List"));

import RemoteApp from './RemoteApp';


// 
export default function Root(props) {
  const [state, setState] = useState(null)

  useEffect(() => {

    //subscribe RxJS state from mudules
    const subscription = store.subscribe( (data) => setState(data.state));

    // listen for custom events from mudules
    const text = document.getElementById("window-state-text");
    addListener("loginEvent", () => text.innerText = `Event: ${window.macro.state.state}`);
    addListener("logoutEvent", () => text.innerText = `Event: ${window.macro.state.state}`);

    return () => {
      store.next({state: "Workouts (unmounted) state"});
      subscription.unsubscribe();

      //remove event listeners Window-based sharing of data
      removeListener("loginEvent", () => text.innerText = `Event: ${window.macro.state.state}`);
      removeListener("logoutEvent", () => text.innerText = `Event: ${window.macro.state.state}`);
    }
  }, []);

  console.log("WORKOUTS STATE: ", state)

  return (
    <section className="workouts">
      <div className="title">
        <h3><pre>@macro/app-dashboard-page</pre> component.</h3>
      </div>
      <div className="dev-description">
        <h4>Shared state from Single-SPA Utility modules</h4>
        <div>

          <div>
            <p>RxJS State:</p>
            <p><b>{state}</b></p>
          </div>

          <div>
            <p>Window global State:</p>
            <b><p id="window-state-text">{window.macro.state.state}</p></b>
            <button style={{margin: "5px"}} onClick={() => window.macro.state.login()} >Login</button>
            <button style={{margin: "5px"}} onClick={() => window.macro.state.logout()} >Logout</button>
          </div>
          
        </div>
      </div>
      {/* <RemoteApp /> */}


    </section>
  )
}
