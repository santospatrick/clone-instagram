import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from './pages/Feed';
import HeaderImage from './components/HeaderImage/HeaderImage';

const AppNavigator = createStackNavigator(
    {
        Feed,
    },
    {
        defaultNavigationOptions: {
            headerTitle: HeaderImage,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#f5f5f5',
            },
        },
    },
);

export default createAppContainer(AppNavigator);
