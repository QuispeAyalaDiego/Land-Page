import Home from "./pages/Home";
import Premium from "./pages/Premium";

import Header from "./components/header"

import {BrowserRouter as Router, Route,Switch} from
 "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Premium" component={Premium}/>
      </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
