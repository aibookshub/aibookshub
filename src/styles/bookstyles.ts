import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        // backgroundColor: '#f5f5f5',
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
    },
    albumContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    albumCover: {
        width: screenWidth * 0.44,
        height: screenWidth * 0.45,
        borderRadius: 10,
    },
    albumTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    galleryGrid: {
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingTop: 2,
    },
    galleryItemContainer: {
        alignItems: 'center',
        width: '50%',
        aspectRatio: 9 / 16,
        marginBottom: 10,
    },
    galleryItemImage: {
        height: '85%',
        width: '100%',
        aspectRatio: 10 / 16,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    galleryItemTitle: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "600",
        color: '#333',
        textAlign: 'center',
    },

    gridContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    gridItem: {
        flex: 1,
        margin: 8,
        padding: 16,
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 8,
    },
    bookImage: {
        width: 100,
        height: 150,
        borderRadius: 7,
        marginBottom: 0,
    },
    book_container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    book_item: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',  // ✅ Ensure row layout
        flexShrink: 1,  // ✅ Prevent overflow
        width: '100%',  // ✅ Ensure it doesn't exceed screen width
    },
    book_title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    book_author: {
        fontSize: 16,
        color: '#666',
    },
    book_summary: {
        fontSize: 14,
        color: '#444',
        textAlign: 'left',  // ✅ Justifies text on Android
        lineHeight: 20,  // ✅ Improves readability
    },
    pdf_container: {
        flex: 1,
        justifyContent: 'flex-start',        
        alignItems: 'center',
        marginTop: 2,
        position: "relative",  // Ensure stacking behavior works
        zIndex: 1,
    },
    loaderContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: "rgba(255,255,255,0.8)",
        padding: 10,
        borderRadius: 10,
    },
    progressText: {
        marginTop: 10,
        fontSize: 16,
        color: "#333",
    },
    pdf_content: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

});

export default styles;

