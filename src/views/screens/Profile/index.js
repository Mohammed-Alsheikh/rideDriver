import Profile from './component';
import {connect} from 'react-redux';
import {resetPassword} from '../../../redux/actions';

const mapStateToProps = state => ({
  user: state.user.value,
  errorMessage: state.error.value,
});

export default connect(
  mapStateToProps,
  {resetPassword},
)(Profile);
