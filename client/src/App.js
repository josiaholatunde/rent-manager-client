import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/layout/Navbar";
import CreateRentRequest from "./components/rent/CreateRentRequest";
import { Signup } from "./components/onboarding/Signup";
import Notification from "./components/layout/Notification";
import './App.scss';
import history from "./util/history";


const SignIn = () => {
  return <h1>Sign In</h1>
}

const token = localStorage.getItem('token');
let user = localStorage.getItem('user');
if (token && user && Object.keys(user).length > 0) {
  setAuthToken(token);
  user = JSON.parse(user)
  store.dispatch({
    type: SET_LOGGED_IN_USER,
    payload: {
      user : user,
      token
    }
  })
}

function App() {
  return <div className = "App" >
          <Provider store={store}>
            <Router history={history}>
              <Navbar />
              <div className='container py-2'>
                <Switch>
                  <Route path='/login' exact component={SignIn} />
                  <Route path='/sign-up' exact component={Signup} />
                  <Route path='/rent-request/add' exact component={CreateRentRequest} />
                  <Notification />
                </Switch>
              </div>
            </Router>
    </Provider>
  
      </div>
}

export default App;