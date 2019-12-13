import React from 'react';
import './App.css';

function Button2(props){
  //uses css style class from App.css
    return (
      <p>
        <button type="button" className={props.buttonClass}>
          {props.buttonText}
        </button>
      </p>
    );
  }

export default Button2;
