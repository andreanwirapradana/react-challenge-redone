import './App.css';

// Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import Home from './components/home';
import Detail from './components/detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:id" >
          <Detail />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
