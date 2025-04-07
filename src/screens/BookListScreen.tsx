import React from 'react';
import styles from "@/src/styles/bookstyles";
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { BooklistProps } from "@/src/types";

import { booklist as b12 } from "@/py/ts/b12"
import { booklist as b18 } from "@/py/ts/b18"
import { booklist as b14 } from "@/py/ts/b14"
import { booklist as b16 } from "@/py/ts/b16"

const getBooksByCategory = (subjectId: string) => {
    switch (subjectId) {
        case '12': return b12;
        case '14': return b14;
        case '16': return b16;
        case '18': return b18;
        default: return b18;
    }
};

const BooksScreen: React.FC<BooklistProps> = ({ route, navigation }) => {
    const { catId, catName, subjectId } = route.params;  // ✅ Extract params safely
    console.log("----BookListScreen.tsx-------->subCateId:", catId, "     subject Id: ", subjectId);
    const bookList = getBooksByCategory(subjectId || '12');
    const filteredSubcategories = bookList.filter(
        (booklist) => booklist.id.startsWith(catId)        
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredSubcategories}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('BookDetail', { book: item })}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image source={{ uri: item.cover }} style={styles.bookImage} />
                            <View style={{ marginLeft: 15, alignSelf: 'flex-start', flexShrink: 1 }}>
                                <Text style={styles.book_title}>{item.name.slice(0, -4)}</Text>
                                <Text style={styles.book_author}>{item.author}</Text>
                                <Text style={styles.book_author}>{item.publisher}</Text>
                                <Text style={styles.book_author}>ISBN: {item.isbn_13}</Text>
                                <Text style={styles.book_summary} numberOfLines={3} ellipsizeMode="tail">
                                    {item.summary}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};


export default BooksScreen;