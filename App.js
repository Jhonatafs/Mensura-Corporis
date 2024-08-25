import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';

import Home from './screens/Home';
import About from './screens/About';
import Assessment from './screens/Assessment';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#292933" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: '#292933',
            },
            headerTintColor: '#EEE',
            headerTitle: 'Voltar',
          }}
        />
        <Stack.Screen
          name="Assessment"
          component={Assessment}
          options={{
            headerStyle: {
              backgroundColor: '#292933',
            },
            headerTintColor: '#EEE',
            headerTitle: 'Voltar',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
