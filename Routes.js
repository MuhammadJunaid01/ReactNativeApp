import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer> 
        
    );
};

export default Routes;