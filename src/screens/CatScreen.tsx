import React from 'react';
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "@/src/styles/bookstyles";
import { CatList } from "@/src/config/catelist"

import { SubCateProps, SubCateItem } from "@/src/types";

const CatScreen: React.FC<SubCateProps> = ({ navigation, route }) => {
    const { subjectId, subjectName } = route.params;

    const filteredCategories = CatList.filter(
        (cat) => cat.id.startsWith(subjectId)
    );

    const renderItem = ({ item }: { item: SubCateItem }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => navigation.navigate("BookList", {
                catId: item.id, 
                catName: item.name,
                subjectId: subjectId,
            })}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredCategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2} // 2-column grid layout
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

export default CatScreen;