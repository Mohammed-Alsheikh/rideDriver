import Path from './component';
import {connect} from 'react-redux';
import {} from '../../../../redux/actions';

const mapStateToProps = state => ({
  user: state.user.value,
  errorMessage: state.error.value,
});

export default connect(
  mapStateToProps,
  {},
)(Path);
