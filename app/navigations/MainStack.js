import React from 'react';
import NavigationStrings from './NavigationStrings';
import * as Screens from '../screens';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
}
