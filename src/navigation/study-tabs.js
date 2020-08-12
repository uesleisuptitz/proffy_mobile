import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TeacherList, Favorites} from '../screens';
import {COLORS, ICONS} from '../assets';

const {Navigator, Screen} = createBottomTabNavigator();

const StudyTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
          fontWeight: 'bold',
        },
        inactiveBackgroundColor: COLORS.grayOpacity,
        activeBackgroundColor: COLORS.grayActiveBg,
        inactiveTintColor: COLORS.grayInactive,
        activeTintColor: COLORS.grayActive,
      }}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({size, focused}) => {
            let s = StyleSheet.create({
              icon: {
                width: size,
                height: size,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : COLORS.grayInactive,
              },
            });
            return <Image source={ICONS.giveClasses} style={s.icon} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({size, focused}) => {
            let s = StyleSheet.create({
              icon: {
                width: size,
                height: size,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : COLORS.grayInactive,
              },
            });
            return <Image source={ICONS.heartOutline} style={s.icon} />;
          },
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
