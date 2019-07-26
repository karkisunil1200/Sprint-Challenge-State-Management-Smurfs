import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_START
} from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: payload
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case ADD_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: [...state.smurfs, payload]
      };
    default:
      return state;
  }
};
