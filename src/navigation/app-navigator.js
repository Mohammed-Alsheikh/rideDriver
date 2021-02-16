import {createSwitchNavigator} from 'react-navigation';
import {LoginScreen} from '../views/screens/Auth';
import {ROUTES} from '../views/constants';
import DrawerNavigator from './drawer-navigator';
import RegisterNavigator from './register-navigator';

export default createSwitchNavigator(
  {
    [ROUTES.RegisterNavigator]: {screen: RegisterNavigator},
    [ROUTES.Login]: {screen: LoginScreen},
    [ROUTES.DrawerNavigator]: {screen: DrawerNavigator},
  },
  {
    initialRouteName: ROUTES.Login,
  },
);
