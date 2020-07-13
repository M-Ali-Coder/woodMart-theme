import React from "react";
import "./scss/App.scss";
import TopBar from "./components/TopBar";
import AppMainHeader from "./components/AppMainHeader";
import AppHeaderNav from "./components/AppHeaderNav";
import ShoppingCartSideBar from "./components/ShoppingCartSideBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppMainHeader />
      <AppHeaderNav />
      <ShoppingCartSideBar />
    </div>
  );
}

export default App;
