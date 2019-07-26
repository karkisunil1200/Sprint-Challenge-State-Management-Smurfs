import {GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE} from '../actions';

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
    default:
      return state;
  }
};
