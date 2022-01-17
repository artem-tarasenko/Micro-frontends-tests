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

//*   Query more data, 1 request for a full page
//*   Do the same for a MealPlan page
//*   Look at fragments, would it make sense to add it to subcomponents?
//*   Look at how to add a MFE into the MFE (Parcel)
//*   Test query further
//*   See utility MFE, for Apollo and styling
//*   See a full auth logic with auth page imported from the macro app
//*   See a proper nav for the app

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
  query GetMealPlanINfo {
    me {
        id
        mealPlans(isActive: true) {
            id
            status
            days {
                id
                position
                meals {
                    id
                    position
                    status
                    type {
                        name
                        code
                    }
                }
            }
        }
    }
  }
`;

function MealPlanAPIData() {
  const { loading, error, data } = useQuery(USER_INFO);

  if(error) return (
    <div className="component">
      <p>This component makes a request to API for Meal Plan data.</p>
      <pre style={{color: 'red'}}>
        API request failed. {error}
      </pre>
    </div>  
  )

  if(loading) return (
    <div className="component">
      <p>This component makes a request to API for Meal Plan data.</p>
      <pre style={{color: 'blue'}}>
        Loading...
      </pre>
    </div>
    
  )

  return (
    <div className="component">
      <p>This component makes a request to API for Meal Plan data.</p>
      <pre>
        Query result: User ID {data.me.id}
      </pre>
      {
        data.me.mealPlans.map( (mealplan) => (
          <div key={mealplan.id} className="mealPlan_info">
            <p>Meal Plan ID: {mealplan.id}, status: {mealplan.status}, days: {mealplan.days.length}</p>
            {
              mealplan.days.map( day => (
                <div key={day.id} className="mealPlan_day">
                  <p>Day {day.position + 1} ID: {day.id}, meals: {day.meals.length}</p>
                </div>
                )
              )
            }
          </div>)
        )
      }
    </div>
    
  )
}

async function auth() {
  try {
    const res = await axios.post('https://nz-alpha-customer.alpha-macro.com/v2/auth/login', {
      username: "appletest@example.com",
      password: "transform"
    });

    // console.log("MEALPLAN PAGE - Info: Tokens updated")
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
  } catch (error) {
    console.log("ERR?", error);
    throw new Error(error);
  }
}



export default function Root(props) {
  const [state, setState] = useState(null)
  useEffect( () => {
    //auth on GraphQL Api to query data
    auth();

    //subscribe to RxJS shared module data
    const subscription = store.subscribe( data => setState(data.state));

    return () => {
      store.next({ state: "MealPlan unmount state"});
      subscription.unsubscribe();
    }
  }, [])

  console.log("MEAL PLAN AUTH => ", getState.isAuthenticated);
  
  return (
    <ApolloProvider client={client}>
      <section className="mealPlan">
        <div className="title">
          <h3><pre>@macro/app-mealplan-page</pre> component.</h3> 
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
              <p><b>{state}</b></p>
            </div>
          </div>
        </div>
        <MealPlanAPIData />
      </section>
    </ApolloProvider>
  );
}


