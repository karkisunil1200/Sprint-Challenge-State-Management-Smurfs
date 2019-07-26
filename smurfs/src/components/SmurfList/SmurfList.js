import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurf} from '../store/actions/index';
import SmurfForm from '../SmurfForm/SmurfForm';
import Smurf from '../Smurf/Smuf';
import './SmurfList.css';

function SmurfList(props) {
  useEffect(() => {
    props.getSmurf();
  }, []);
  return (
    <div>
      <div className='smurfList'>
        {props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
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
