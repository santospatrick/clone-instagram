import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';

const AppNavigator = createStackNavigator(
    {
        Home,
    },
    {
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
