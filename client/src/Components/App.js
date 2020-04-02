import React from 'react';
import '../Css/App.css';
import Landing from "./Landing.js"


function App() {
  return (
    <div id="app">
      <Landing/>
      <div id='header'>
        <div id='dropdown'>

        </div>
      </div>
      <div id="homeImage"> 
        <div id="logo">
        </div>
        <div id='buttonWrapper'>
        <div id='signIn'>
        </div>
        <div id='signUp'>
        </div>
        <div id="learnMore">
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
