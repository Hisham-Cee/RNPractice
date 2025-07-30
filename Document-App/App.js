import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import ImageDisplay from './screens/ImageDisplay';
import PdfDisplay from './screens/PdfDisplay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
        <Stack.Screen name="PdfDisplay" component={PdfDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

