import Login from './component';
import {connect} from 'react-redux';
import {loginUser} from '../../../../redux/actions';

const mapStateToProps = state => ({
  user: state.user.value,
  errorMessage: state.error.value,
});

export default connect(
  mapStateToProps,
  {loginUser},
)(Login);
