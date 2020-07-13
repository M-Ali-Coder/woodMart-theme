import React from "react";
import "./scss/App.scss";
import TopBar from "./components/TopBar";
import AppMainHeader from "./components/AppMainHeader";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppMainHeader />
    </div>
  );
}

export default App;
