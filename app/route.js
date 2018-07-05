/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import HomePage from '../modules/home';
import UserPage from '../modules/user';
import CustomPage from '../modules/custom';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Home: { screen: HomePage },
  User: { screen: UserPage },
  Custom: { screen: CustomPage}
}, {
	initialRouteName: 'Home',
	navigationOptions: {
    header: null,
  },
});
