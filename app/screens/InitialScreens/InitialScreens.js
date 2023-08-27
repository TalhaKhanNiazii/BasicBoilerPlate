import {View, Text} from 'react-native';
import React from 'react';
import NavigationStrings from '../../navigations/NavigationStrings';
import Styles from '../Styles/Styles';
const InitialScreens = ({navigation}) => {
  return (
    <View style={Styles.mainContainer}>
      <Text
        onPress={() => navigation.navigate(NavigationStrings.HOME)}
        style={Styles.txt}>
        InitialScreens
      </Text>
    </View>
  );
};

export default InitialScreens;
