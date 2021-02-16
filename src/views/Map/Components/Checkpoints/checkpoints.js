import React, {useEffect, useState} from 'react';
import {fetchCheckpoints} from './actions';
import Checkpoint from './checkpoint';

export default ({DirectionsComponent}) => {
  const [checkpoints, setCheckpoints] = useState([]);

  useEffect(() => {
    fetchCheckpoints()
      .then(res => setCheckpoints(res))
      .catch(ex => console.log(ex));
  }, [setCheckpoints]);

  return checkpoints.length
    ? checkpoints.map(checkpointObj => (
        <React.Fragment>
          <Checkpoint {...{checkpointObj}} />
          <DirectionsComponent checkpoints={checkpoints} />
        </React.Fragment>
      ))
    : null;
};
