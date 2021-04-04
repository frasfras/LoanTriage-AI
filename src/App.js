import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Authen from './Authen';
import AskBank from './AskBank';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch >
          
            <Route exact path="/callback" component={Authen} />
            <Route exact path="/loan" component={AskBank} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
