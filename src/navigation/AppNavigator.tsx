// AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./DrawerNavigator";

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
);

export default AppNavigator;
