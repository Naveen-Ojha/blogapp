import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MainStackNavigator, SettingStackNavigator } from "./MainStackNavigator";
import SearchScreen from "../pages/SearchScreen";

const Tab = createBottomTabNavigator();

const MaterialIconsSettingOption = {
    headerShown: false,
    tabBarIcon: ({ color = '#ff0036', size = 25 }) => (
        <MaterialCommunityIcons name="information" color={color} size={size} />
    ),
}

const MaterialIconsSearchOption = {
    headerShown: false,
    tabBarIcon: ({ color = '#ff0036', size = 25 }) => (
        <MaterialCommunityIcons name="magnify" color={color} size={size} />
    ),
}

const MaterialIconsHomeOption = {
    headerShown: false,
    tabBarIcon: ({ color = '#ff0036', size = 25 }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={MaterialIconsHomeOption} name="Home" component={MainStackNavigator} />
            <Tab.Screen options={MaterialIconsSettingOption} name="About" component={SettingStackNavigator} />
            <Tab.Screen options={MaterialIconsSearchOption} name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;