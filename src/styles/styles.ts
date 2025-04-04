import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: screenWidth * 0.03,
    },
    grid: {
        justifyContent: 'space-between',
    },

    
    permissionText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginTop: 20,
    },


    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '20%',
        height: '100%',
        resizeMode: 'cover',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContent: {
        width: screenWidth * 0.85,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 10,
        alignItems: 'flex-start',
    },
    inputContainer: {
        marginBottom: 10,
    },
    optionButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        alignItems: 'center',
    },
    optionText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        color: 'white',
        marginRight: 2,
    },
    textInput: {
        borderWidth: 1,
        fontWeight: 'bold',
        color: 'white',
        borderColor: 'white',
        borderRadius: 5,
        padding: 18,
        fontSize: 16,
        flex: 1,
        marginRight: 18,
    },
    galleryContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
    divider: {
        height: 1, backgroundColor: "#ccc", marginVertical: 10
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 20, marginTop: 10, color: "#555"
    },

});

export default styles;

