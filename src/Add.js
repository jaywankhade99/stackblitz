import React from 'react';

export default function Add(props) {
  console.log(props);
  function increment() {
    props.increment(props.counter + 1);
  }

  return (
    <>
      <button onClick={() => increment()}> + </button>
      {/* {props.counter == 10 && alert('Hey ypur counter hit 10')} */}
    </>
  );
}
