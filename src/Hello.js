import React, { useState } from 'react';
import Bye from './Bye';
import Button from 'react-bootstrap/Button';
function Hello() {
  let [name, setName] = useState('Aalekh');
  let [age, setAge] = useState(24);
  let button;
  if (age == 24) {
    button = <p>WOW</p>;
  } else {
    button = <p>OK</p>;
  }
  let destination = 'kerala';
  console.log('Welcome to ', destination);
  return (
    <>
      <h1>
        Welcome,{name},{age}
      </h1>
      <Bye name={name} age={age} />
      {button}
    </>
  );
}

export default Hello;
