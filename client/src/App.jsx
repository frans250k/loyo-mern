import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  // const user = true; //dumy example var!
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Products">
          <ProductList />
        </Route>
        <Route path="/Products/:category">
          <ProductList />
        </Route>
        <Route path="/Product/:id">
          <Product />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        {/* <Route path="/Login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/Register">{user ? <Redirect to="/" /> : <Register />}</Route> */}
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
