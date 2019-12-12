import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button2 from './Button2';

function Button1(props){
  return (
    <p>
      <button type="button" style={{backgroundColor:props.buttonColor}}>
        {props.buttonText}
      </button>
    </p>
  );
}

function App() {
  return (
    <div className="App">
        <h3>React Workshop</h3>
        <code>11th Nov 2019</code>
        <Button1 buttonText="Ok" buttonColor="red" />
        <Button2 buttonText="Hello" buttonClass="btn-info" />
        <p>Some dummy content here.</p>
    </div>
  );
}

export default App;
