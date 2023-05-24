
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Text} from 'react-native';

type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabsStackParamsList>;
};

type TabsStackParamsList = {
  Home: undefined;
  Profile: undefined;
};

type HomeStackParamList = {
  HomeRoot: undefined;
};

type ProfileStackParamList = {
  ProfileRoot: undefined;
};

const Root = createStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<TabsStackParamsList>();
const Home = createStackNavigator<HomeStackParamList>();
const Profile = createStackNavigator<ProfileStackParamList>();

const TabsStack = () => {
  return (
    <Tabs.Navigator detachInactiveScreens={true}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
    </Tabs.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="HomeRoot" component={HomeRoot} />
    </Home.Navigator>
  );
};

const HomeRoot = () => {
  return (
    <Text>
      HomeRoot
    </Text>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator>
      <Profile.Screen name="ProfileRoot" component={ProfileRoot} />
    </Profile.Navigator>
  );
};

const ProfileRoot = () => {
  return (
    <Text>
      ProfileRoot
    </Text>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Tabs" component={TabsStack} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default App;
