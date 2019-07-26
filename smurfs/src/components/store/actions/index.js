import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';

export const getSmurf = () => dispatch => {
  dispatch({type: GET_SMURFS_START});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type: GET_SMURFS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSmurfs = smurf => dispatch => {
  dispatch({type: GET_SMURFS_START});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log('addSmurf ', res);
      dispatch({type: GET_SMURFS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
    });
};
