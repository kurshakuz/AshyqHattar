import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import WelcomeScreen from "./Screens/WelcomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import SearchDetailsScreen from "./Screens/SearchDetailsScreen";
import CardDetailsScreen from "./Screens/CardDetailsScreen";

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },
    SearchDetails: {
      screen: SearchDetailsScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },
    CardDetails: {
      screen: CardDetailsScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
      }
    }
  },
  {
    initialRouteName: "Welcome"
  }
);

class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    );
  }
}

export default App;
