import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './users/component.js/DrawerNavigator';
import CategoryProvider from './users/context/CategoryContext';

export default function App() {
  return (
    <NavigationContainer>
      <CategoryProvider>
        <DrawerNavigator />
      </CategoryProvider>
    </NavigationContainer>
  );
}
