import './App.css';

// Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import Home from './components/home';
import Detail from './components/detail';
import PrivateRoute from './components/PrivateRoute';
import User from './components/User';
import SignIn from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:id" >
          <Detail />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/signin" >
          <SignIn />
        </Route>
        <PrivateRoute path="/user">
          <User />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
