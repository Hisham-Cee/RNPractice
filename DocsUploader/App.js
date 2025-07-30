
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import DetailsScreen from './screens/DetailsScreen';
import ImageDisplay from './screens/Display/ImageDisplay';
import PdfDisplay from './screens/Display/PdfDisplay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
        <Stack.Screen name="PdfDisplay" component={PdfDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
