import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/types"; 

import HomeScreen from "@/src/screens/HomeScreen";
import CatScreen from "@/src/screens/CatScreen";
import BookListScreen from "@/src/screens/BookListScreen";
import BookDetailScreen from "@/src/screens/BookDetailScreen";

// const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
            options={{
                title: "Home List",
                headerShown: true,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (<TouchableOpacity onPress={() => alert("Settings")}><Text></Text></TouchableOpacity>),
            }}
            listeners={{
                focus: () => console.log("Home List"),
            }}
        />

        <Stack.Screen name="Category" component={CatScreen}
            options={({ route }) => ({
                title: route.params?.subjectName || "Category",
                headerShown: true,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (<TouchableOpacity onPress={() => alert("Settings")}><Text></Text></TouchableOpacity>),
            })}
            listeners={{
                focus: () => console.log("Category- focused"),
            }}
        />

        <Stack.Screen   name="BookList"    component={BookListScreen}
            options={({ route }) => ({
                title: route.params?.catName || "Book 2 List",
                headerShown: true,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (
                    <TouchableOpacity onPress={() => alert("Settings")}>
                        <Text></Text>
                    </TouchableOpacity>
                ),
            })}
            listeners={{
                focus: () => console.log("Book List screen"),
            }}
        />

        <Stack.Screen name="BookDetail" component={BookDetailScreen}
            options={({ route }) => ({
                title: route.params?.book.title || "Book Details",
                headerShown: true,
            })}
            listeners={{
                focus: () => console.log("Book Detail f 1 ocused"),
            }}
        />
    </Stack.Navigator>
);

export default StackNavigator;
