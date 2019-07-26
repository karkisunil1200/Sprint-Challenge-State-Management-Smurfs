import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurf} from '../store/actions/index';
import SmurfForm from '../SmurfForm/SmurfForm';
import Smurf from '../Smurf/Smuf';

function SmurfList(props) {
  useEffect(() => {
    props.getSmurf();
  }, []);
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
      <div className='form'>
        <SmurfForm />
      </div>
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
