import Home from "./pages/Home";
import Premium from "./pages/Premium";
import Integrantes from "./pages/Integrantes"
import FAQ from "./pages/FAQ"
import Product from "./pages/Product";
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
        <Route path="/Integrantes" component={Integrantes}/>
        <Route path="/FAQ" component={FAQ}/>
        <Route path="/Product" component={Product}/>
      </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
