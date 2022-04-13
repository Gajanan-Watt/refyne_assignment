import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { Profile } from "./component/Profile";
import { Feed } from "./component/Feed";
import { Connection } from "./component/Connections";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_child">
        <div>
          <Profile />
        </div>
        <div>
          <Feed />
        </div>
        <div>
          <Connection />
        </div>
      </div>
    </div>
  );
}

export default App;
