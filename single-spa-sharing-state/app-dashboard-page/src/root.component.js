import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { getState, store } from '@macro/app-utils';


//*   Look at fragments, would it make sense to add it to subcomponents?
//*   Look at how to add a MFE into the MFE (Parcel)
//*   How to share data with PARCEL
//*   Test query further
//*   See utility MFE, for Apollo and styling
//*   See a full auth logic with auth page imported from the macro app

//  Apollo functions
const httpLink = createHttpLink({
  uri: 'https://nz-alpha-customer.alpha-macro.com/v2/graphql/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const USER_INFO = gql`
  query GetUserInfo {
      me {
        id
        firstName
        lastName
    }
  }
`;


//Regular component
function UserInfo() {
  const { loading, error, data } = useQuery(USER_INFO);

  if(error) return (
    <div className="component">
      <p>This component makes a request to API for UserInfo data (name).</p>
      <pre style={{color: 'red'}}>
        API request failed. {error}
      </pre>
    </div>
    
  )

  if(loading) return (
    <div className="component">
      <p>This component makes a request to API for UserInfo data (name).</p>
      <pre style={{color: 'blue'}}>
        Loading...
      </pre>
    </div>
    
  )
  
  return (
    <div className="component">
      <p>This component makes a request to API for UserInfo data (name).</p>
      <pre>
        Query result: {data.me.firstName} {data.me.lastName}
      </pre>
    </div>
    
  )
}

async function auth() {
  try {
    const res = await axios.post('https://nz-alpha-customer.alpha-macro.com/v2/auth/login', {
      username: "appletest@example.com",
      password: "transform"
    });

    // console.log("DASHBOARD PAGE - Info: Tokens updated")
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
  } catch (error) {
    console.log("ERR?", error);
    throw new Error(error);
  }
}

export default function Root(props) {
  const [dashState, setDashState] = useState(null)

  useEffect(() => {
    auth();
    const subscription = store.subscribe( data => setDashState(data.state));

    return () => {
      store.next({state: "dashboard (unmouneted) state"});
      subscription.unsubscribe();
    }
  }, []);

  console.log("DASHBOARD AUTH => ", getState.isAuthenticated);

  return (
    <ApolloProvider client={client}>
      <section className="page-dashboard">
        <div className="title">
          <h3><pre>@macro/app-dashboard-page</pre> component.</h3>
        </div>
        <div className="dev-description">
          <h4>Shared state from Single-SPA Utility modules</h4>
          <div>
            <div>
              <p>Vanilla JS state (auth):</p>
              <p><b>{getState.isAuthenticated.toString()}</b></p>
            </div>
            <div>
              <p>RxJS State:</p>
              <p><b>{dashState}</b></p>
            </div>
          </div>
        </div>
        <UserInfo />
      </section>
    </ApolloProvider>
  );
}

  