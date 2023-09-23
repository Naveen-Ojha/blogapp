import React, { useContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { SettingStackNavigator } from "./MainStackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { CategoryContext } from "../context/CategoryContext";
import CategoryScreen from "../pages/CategoryScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const { categoryName } = useContext(CategoryContext)
    const cateKeys = Object.keys(categoryName)
    return (
        <>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={BottomTabNavigator} />
                {
                    cateKeys.map((cate) => {
                        return (
                            <>
                                <Drawer.Screen key={categoryName[cate]['TermSlug']} name={categoryName[cate]['TermName']} initialParams={{ slug: categoryName[cate]['TermSlug'] }} component={CategoryScreen} />
                            </>
                        )
                    })
                }
                <Drawer.Screen name="About" component={SettingStackNavigator} />
            </Drawer.Navigator>
        </>
    );
}

export default DrawerNavigator;