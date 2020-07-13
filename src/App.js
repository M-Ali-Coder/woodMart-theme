import React from "react";
import "./scss/App.scss";
import TopBar from "./components/TopBar";
import AppMainHeader from "./components/AppMainHeader";
import AppHeaderNav from "./components/AppHeaderNav";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppMainHeader />
      <AppHeaderNav />
    </div>
  );
}

export default App;
