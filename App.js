import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer> 
   
  );
}


