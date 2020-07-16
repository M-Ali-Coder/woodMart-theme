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
import ShopPage from "./components/ShopPage";
import PagesPage from "./components/PagesPage";
import CartPage from "./components/CartPage";
import ScrollNav from "./components/ScrollNav";
import UserRegisterSideBar from "./components/UserRegisterSideBar";

function App() {
  return (
    <div className="App">
      <ScrollNav />
      <TopBar />
      <AppMainHeader />
      <AppHeaderNav />
      <ShoppingCartSideBar />
      <UserRegisterSideBar />

      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/blogs/news" render={() => <BlogsPage />} />
        <Route path="/shop" render={() => <ShopPage />} />
        <Route path="/pages" render={() => <PagesPage />} />
        <Route path="/cart" render={() => <CartPage />} />
        <Route render={() => <h1> 404 page</h1>} />
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
