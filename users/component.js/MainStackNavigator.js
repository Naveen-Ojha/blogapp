import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../pages/DetailsScreen';
import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../pages/AboutScreen';
import CategoryScreen from '../pages/CategoryScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
    headerStyle: {
        backgroundColor: "#ff0036",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
}

function MainStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
    )
}

const SettingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About Us" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, SettingStackNavigator };