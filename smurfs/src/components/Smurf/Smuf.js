import React from 'react';

function Smurf(props) {
  return (
    <div className='m-5 bg-info p-5 text-white'>
      <h4>Name: {props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
}

export default Smurf;
