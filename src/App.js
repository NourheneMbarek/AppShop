
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route path="/product/:productId" exact component={ProductComponent}></Route>
          <Route > 404 Not Found</Route>
        </Switch>

      </Router>



    </div>
  );
}

export default App;
