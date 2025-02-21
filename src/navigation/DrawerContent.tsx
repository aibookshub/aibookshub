// CustomDrawerContent.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {cat1} from "@/src/config/catelist"
import styles from "@/src/styles/bookstyles";
import { DrawerProps } from "@/src/types";


const CustomDrawerContent: React.FC<DrawerProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            {cat1.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={styles.item}
                    onPress={() =>
                        navigation.navigate("Category", {
                                categoryId: category.id,
                                categoryName: category.name,
                        })
                    }
                >
                    <Text style={styles.itemText}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CustomDrawerContent;