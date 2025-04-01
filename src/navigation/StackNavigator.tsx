import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/types"; 

import Cat1HomeScreen from "@/src/screens/Cat1HomeScreen";
import Cat2SubScreen from "@/src/screens/Cat2SubScreen";
import BookListScreen from "@/src/screens/BookListScreen";
import BookDetailScreen from "@/src/screens/BookDetailScreen";

// const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Cat1HomeScreen}
            options={{
                title: "Book Category",
                headerShown: false,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (<TouchableOpacity onPress={() => alert("Settings")}><Text></Text></TouchableOpacity>),
            }}
            listeners={{
                focus: () => console.log("Home focused"),
            }}
        />

        <Stack.Screen name="Category" component={Cat2SubScreen}
            options={({ route }) => ({
                title: route.params?.categoryName || "Category",
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

        <Stack.Screen   name="Books"    component={BookListScreen}
            options={({ route }) => ({
                // title: route.params?.categoryName || "Book 2 List",
                title: "book2",
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
                focus: () => console.log("Books screen focused"),
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
