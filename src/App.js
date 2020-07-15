import React from "react";
import "./scss/App.scss";
import TopBar from "./components/TopBar";
import AppMainHeader from "./components/AppMainHeader";
import AppHeaderNav from "./components/AppHeaderNav";
import ShoppingCartSideBar from "./components/ShoppingCartSideBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AppFooter from "./components/AppFooter";
import BlogsPage from "./components/pages/BlogsPage";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppMainHeader />
      <AppHeaderNav />
      <ShoppingCartSideBar />

      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/blogs/news" render={() => <BlogsPage />} />
      </Switch>

      <AppFooter />
    </div>
  );
}

export default App;
