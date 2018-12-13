import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import {
  AddScreen,
  ChatSelectScreen,
  OverviewScreen,
  FeedScreen,
  AddSelectScreen,
  DiaryEntryScreen,
  EnterMeasurementsScreen,
  CalendarScreen,
  MoreScreen,
  MeasurementScreen,
  ProfileScreen,
  RecipeScreen,
  EducationScreen,
} from '../screens';

import { TabBarIcon } from '../components';

const MeasurementsStack = createStackNavigator({
  Overview: OverviewScreen,
  WeightView: {
    screen: MeasurementScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.type.sv,
    }),
  },
  DiastolicView: {
    screen: MeasurementScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.type.sv,
    }),
  },
  SystolicView: {
    screen: MeasurementScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.type.sv,
    }),
  },
  BloodsugarView: {
    screen: MeasurementScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.type.sv,
    }),
  },
  KetonsView: {
    screen: MeasurementScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.type.sv,
    }),
  },
});

MeasurementsStack.navigationOptions = {
  tabBarLabel: 'Mätvärden',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart${focused ? '' : '-outline'}`
          : 'fa-heartbeat'
      }
    />
  ),
};
const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Kalender',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? '' : '-outline'}`
          : 'md-calendar'
      }
    />
  ),
};

const EducationStack = createStackNavigator({
  Education: EducationScreen,
});

EducationStack.navigationOptions = {
  tabBarLabel: 'Utbildning',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-bulb${focused ? '' : '-outline'}`
          : 'md-bulb'
      }
    />
  ),
};

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
  Select: AddSelectScreen,
  Diary: DiaryEntryScreen,
  EnterMeasurements: EnterMeasurementsScreen,
});

FeedStack.navigationOptions = {
  tabBarLabel: 'Tidslinje',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-paper${focused ? '' : '-outline'}`
          : 'md-paper'
      }
    />
  ),
};
const MoreStack = createStackNavigator({
  More: MoreScreen,
  Profile: ProfileScreen,
  Recipe: RecipeScreen,
});
MoreStack.navigationOptions = {
  tabBarLabel: 'Mer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-more${focused ? '' : '-outline'}`
          : 'md-more'
      }
    />
  ),
};

const MainTabNavigator = createBottomTabNavigator(
  {
    CalendarStack,
    MeasurementsStack,
    FeedStack,
    EducationStack,
    MoreStack,
  },
  { initialRouteName: 'FeedStack' }
);
export default MainTabNavigator;
