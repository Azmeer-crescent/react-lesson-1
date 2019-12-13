import React from 'react';
import './App.css';
import Button2 from './Button2';

function Button1(props){
  //uses inline style
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

        <p>Button1 child component - from the same file</p>
        <Button1 buttonText="Ok" buttonColor="red" />
        
        <p>Button2 child component - imported from outside</p>
        <Button2 buttonText="Hello" buttonClass="btn-info" />

        <p>This project uses Google Fonts.</p>
    </div>
  );
}

export default App;
