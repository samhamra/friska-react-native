import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import {
  HomeScreen,
  LinksScreen,
  SettingsScreen,
  ChatScreen,
  AddScreen,
  ChatSelectScreen,
  OverviewScreen,
  WeightViewScreen,
  BloodPressureViewScreen,
  BloodSugarViewScreen,
  KetonesViewScreen,
  FeedScreen,
  AddSelectScreen,
  DiaryEntryScreen,
  EnterMeasurementsScreen,
  CalendarScreen,
} from '../screens';
import { TabBarIcon } from '../components';

const MeasurementsStack = createStackNavigator({
  Overview: OverviewScreen,
  WeightView: WeightViewScreen,
  BloodPressureView: BloodPressureViewScreen,
  BloodSugarView: BloodSugarViewScreen,
  KetonesView: KetonesViewScreen,
});

MeasurementsStack.navigationOptions = {
  tabBarLabel: 'Measurements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
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

const ChatStack = createStackNavigator({
  Select: ChatSelectScreen,
  Chat: ChatScreen,
});

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-chatbubbles${focused ? '' : '-outline'}`
          : 'md-chatbubbles'
      }
    />
  ),
};

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
  Select: AddSelectScreen,
  Diary: DiaryEntryScreen,
  Chat: ChatScreen,
  EnterMeasurements: EnterMeasurementsScreen,
});

FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
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

export const DrawerNavigator = createDrawerNavigator({
  Chat: ChatScreen,
  Diary: DiaryEntryScreen,
});
DrawerNavigator.navigationOptions = {};

class More extends React.Component {
  render() {
    return null;
  }
}

const MainTabNavigator = createBottomTabNavigator({
  CalendarStack,
  MeasurementsStack,
  FeedStack,
  More: {
    screen: More,
    navigationOptions: {
      tabBarOnPress: ({ previousScene, scene, jumpToIndex, navigation }) => {
        console.log(navigation);
        console.log('hej');
        navigation.navigate('drawerOpen');
      },
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
    },
  },
});
export default MainTabNavigator;
