import React from 'react';

function Bye(props) {
  console.log("Name",props)
  return (
    <>
      <h2>Goodbye {props.name}</h2>
    </>
  );
}

// function Bye({name,age}) {
//   console.log("Name",name,age)
//   return (
//     <>
//       <h2>Goodbye,{name}</h2>
//     </>
//   );
// }

export default Bye;
