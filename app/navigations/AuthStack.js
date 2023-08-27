import React from 'react';
import NavigationStrings from './NavigationStrings';
import * as Screens from '../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.INITIAL_SCREEN}
        component={Screens.InitialScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings.SIGNUP}
        component={Screens.Signup}
        options={{headerShown: false}}
      />
    </>
  );
}
