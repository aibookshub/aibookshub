// DrawerNavigator.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "@/src/navigation/DrawerContent";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator drawerContent={(props: any) =>
        <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen
            name="TopDrawerScreen"
            component={StackNavigator}
            options={{ title: "AI-Powered BooksHub 📚" }}
        />
    </Drawer.Navigator>
);

export default DrawerNavigator;
