import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ContactDetails from './screens/ContactDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

