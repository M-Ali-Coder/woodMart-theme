import React from "react";
import "./scss/App.scss";
import TopBar from "./components/TopBar";
import AppMainHeader from "./components/AppMainHeader";
import AppHeaderNav from "./components/AppHeaderNav";
import ShoppingCartSideBar from "./components/ShoppingCartSideBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppMainHeader />
      <AppHeaderNav />
      <ShoppingCartSideBar />

      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
