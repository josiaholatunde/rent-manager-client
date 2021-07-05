import React from "react";
import {  Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/layout/Navbar";
import CreateRentRequest from "./components/rent/CreateRentRequest";
import Signup from "./components/onboarding/Signup";
import Login from "./components/onboarding/Login";
import Notification from "./components/layout/Notification";
import './App.scss';
import history from "./util/history";
import { SET_LOGGED_IN_USER } from "./redux/actions/types"
import setAuthToken from './util/setAuthToken'
import PrivateRoute from './components/onboarding/PrivateRoute'
import ViewPaymentBreakdown from "./components/rent/payment/ViewPaymentBreakdown";

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
                  <Route path='/login' exact component={Login} />
                  <Route path='/sign-up' exact component={Signup} />
                  <Route path='/' exact component={Signup} />
                  <PrivateRoute path='/rent-request/add' exact component={CreateRentRequest} />
                  <PrivateRoute path='/rent-request/:id' exact component={ViewPaymentBreakdown} />
                </Switch>
              </div>
              <Notification />
            </Router>
          </Provider>
  
      </div>
}

export default App;