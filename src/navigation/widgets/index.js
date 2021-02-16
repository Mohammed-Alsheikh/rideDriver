import {CustomDrawer} from './CustomDrawer';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions';
import {DrawerLabel, DrawerIcon} from './DrawerComponents';

const mapStateToProps = state => ({
  user: state.user.value,
});

const Drawer = connect(
  mapStateToProps,
  {logout},
)(CustomDrawer);

export {Drawer as CustomDrawer, DrawerIcon, DrawerLabel};
