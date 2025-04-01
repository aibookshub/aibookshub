import React from 'react';
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "@/src/styles/bookstyles";
import { cat2 } from "@/src/config/catelist"

import { SubCateProps, SubCateItem } from "@/src/types";

const CatScreen: React.FC<SubCateProps> = ({ navigation, route }) => {
    const { categoryId, categoryName } = route.params;

    const filteredSubcategories = cat2.filter(
        (sub) => sub.id.startsWith(categoryId)
    );

    const renderItem = ({ item }: { item: SubCateItem }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => navigation.navigate("BookList", {
                subCateId: item.id, 
                categoryName: item.name
            })}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredSubcategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2} // 2-column grid layout
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

export default CatScreen;