import Register from './component';
import {connect} from 'react-redux';
import {registerUser} from '../../../../redux/actions';

const mapStateToProps = state => ({
  user: state.user.value,
  errorMessage: state.error.value,
});

export default connect(
  mapStateToProps,
  {registerUser},
)(Register);
