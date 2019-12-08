import React from 'react';
import faker from 'faker';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="comment">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
      </div>
    </div>
  )
}

/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <div>
      <label className="Label" htmlFor="name">
        Enter name:
      </label>
      <input id="name"type="text"/>
      <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
    </div>
  </header>
</div> */

export default App;
