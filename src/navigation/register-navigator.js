import {
  LicenceScreen,
  IdentityScreen,
  SelectPathScreen,
  CreatePathScreen,
  RegisterScreen,
} from '../views/screens/Auth';
import {ROUTES} from '../views/constants';
import {createStackNavigator} from 'react-navigation-stack';

export default createStackNavigator(
  {
    [ROUTES.Register]: {
      screen: RegisterScreen,
    },
    [ROUTES.Licence]: {
      screen: LicenceScreen,
    },
    [ROUTES.Identity]: {
      screen: IdentityScreen,
    },
    [ROUTES.SelectPath]: {
      screen: SelectPathScreen,
    },
    [ROUTES.CreatePath]: {
      screen: CreatePathScreen,
    },
  },

  {
    headerLayoutPreset: 'center',
    headerMode: 'none',
    initialRouteName: ROUTES.CreatePath,
  },
);
