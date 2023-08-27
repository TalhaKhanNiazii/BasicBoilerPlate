import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStrings from './NavigationStrings';
import * as Screens from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomTab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: 'black'},
      }}>
      <BottomTab.Screen
        name={NavigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="home" color="white" size={28} />
            ) : (
              <Icon name="home" color="gray" size={24} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.CREATE_POST}
        component={Screens.CreatePost}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="plus-circle" color="white" size={28} />
            ) : (
              <Icon name="plus-circle" color="gray" size={24} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="user-circle" color="white" size={28} />
            ) : (
              <Icon name="user-circle" color="gray" size={24} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="search" color="white" size={28} />
            ) : (
              <Icon name="search" color="gray" size={24} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
export default TabRoutes;
