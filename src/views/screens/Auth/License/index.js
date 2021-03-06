import License from './component';
import {connect} from 'react-redux';
import {uploadImage} from '../../../../redux/actions';

const mapStateToProps = state => ({
  user: state.user.value,
  errorMessage: state.error.value,
});

export default connect(
  mapStateToProps,
  {uploadImage},
)(License);
