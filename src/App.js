import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dialogs from "./components/Dialogs";
import Profile from "./components/Profile";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div>
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
