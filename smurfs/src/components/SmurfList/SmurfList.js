import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurf} from '../store/actions/index';

function SmurfList(props) {
  useEffect(() => {
    props.getSmurf();
  }, []);
  return (
    <div>
      {props.smurfs.map(smurf => {
        return smurf.name;
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  {getSmurf}
)(SmurfList);
