import React from "react";
import CommentDetail from "./components/CommentDetail";
// import logo from './logo.svg';
import "./App.css";
import ApprovalCard from "./components/ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <div>
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            time={new Date().toISOString()}
            comment="Nice blog post"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Guru"
            time={new Date().toString()}
            comment="Nice blog post"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Alex"
            time={new Date().toString()}
            comment="Nice blog post"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Jane"
            time={new Date().toString()}
            comment="Nice blog post"
          />
        </ApprovalCard>
      </div>
    </div>
  );
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
