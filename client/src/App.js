import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/layout/Navbar";
import CreateRentRequest from "./components/rent/CreateRentRequest";

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
                <Route path='/rent-request/add' exact component={CreateRentRequest} />
              </Switch>
            </div>
          </Router>
      </div>
}

export default App;