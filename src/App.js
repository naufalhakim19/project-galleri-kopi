import "./style/App.css";
import Nav from "./component/Nav";
import HomePage from "./component/HomePage";
// import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body className="body">
        <HomePage />
      </body>
    </div>
  );
}

export default App;
