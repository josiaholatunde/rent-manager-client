import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/layout/Navbar";
import CreateRentRequest from "./components/rent/CreateRentRequest";
import { Signup } from "./components/onboarding/Signup";
import './App.scss';


const SignIn = () => {
  return <h1>Sign In</h1>
}

function App() {
  return <div className = "App" >
          <Router>
            <Navbar />
            <div className='container py-2'>
              <Switch>
                <Route path='/login' exact component={SignIn} />
                <Route path='/sign-up' exact component={Signup} />
                <Route path='/rent-request/add' exact component={CreateRentRequest} />
              </Switch>
            </div>
          </Router>
      </div>
}

export default App;