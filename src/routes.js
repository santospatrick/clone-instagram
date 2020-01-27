import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from './pages/Feed';
import HeaderImage from './components/HeaderImage/HeaderImage';

const HeaderTitle = () => <HeaderImage />;

const AppNavigator = createStackNavigator(
    {
        Feed,
    },
    {
        defaultNavigationOptions: {
            headerTitle: HeaderTitle,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#f5f5f5',
            },
        },
    },
);

export default createAppContainer(AppNavigator);
