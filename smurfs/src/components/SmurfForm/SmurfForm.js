import React, {useState} from 'react';

function SmurfForm() {
  const [state, setState] = useState({
    name: '',
    age: '',
    height: ''
  });

  const handleChange = e => {
    console.log(state);
    setState({
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input
            className='form-control'
            onChange={handleChange}
            placeholder='Enter name'
            name='name'
            value={state.name}
          />
        </div>
        <div className='form-group'>
          <label>Age</label>
          <input
            className='form-control'
            onChange={handleChange}
            placeholder='Enter age'
            name='age'
            value={state.age}
          />
        </div>
        <div className='form-group'>
          <label>Height</label>
          <input
            className='form-control'
            onChange={handleChange}
            placeholder='Enter height'
            name='height'
            value={state.height}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SmurfForm;
