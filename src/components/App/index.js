import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from '../Navigation';
import Landing from '../Landing'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import PasswordForget from '../PasswordForget'
import Home from '../Home'
import Account from '../Account'
import Admin from '../Admin'

import * as Routes from '../../constants/routes'

const App = () => ( 
    <Router>
    <div>
      <div>
        <h1>App</h1>
      </div>
        <Navigation  />
        <hr />

        <Route exact path={Routes.LANDING} component={Landing} />
        <Route path={Routes.SIGN_UP} component={SignUp} />
        <Route path={Routes.SIGN_IN} component={SignIn} />
        <Route path={Routes.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={Routes.HOME} component={Home} />
        <Route path={Routes.ACCOUNT} component={Account} />
        <Route path={Routes.ADMIN} component={Admin} />
    </div>
    </Router>
 );

 
export default App;