// trustAllCerts={false}

import PDF from "react-native-pdf";
import 'expo-dev-client';
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute  } from "@react-navigation/native";
import { View, StatusBar  } from 'react-native';
import styles from "@/src/styles/bookstyles";
import { ProgressBar } from "react-native-paper";


type ShowPDFRouteParams = {
    book: {
        original_path: string;
        // Add other book properties you need
    };
};

function ShowPDF() {
    const navigation = useNavigation();
    const route = useRoute();
    const [progress, setProgress] = React.useState(0);
    const { book } = route.params as ShowPDFRouteParams;
    console.log(book.original_path)

    const source = {
        // uri: "https://aibookshub.github.io/b18/1886/Learning Web Development with Bootstrap and Angular - Second Edition.pdf",
        uri: `${book.original_path}`,
        cache: true,
    };
    
    useLayoutEffect(() => {
        StatusBar.setHidden(true); // Hide status bar
        return () => StatusBar.setHidden(false); // Restore on unmount
      }, []);
      
    useLayoutEffect(() => {
        // Get the parent (Drawer) navigation
        const parent = navigation.getParent();
        
        // Hide the Drawer header when this screen is focused
        parent?.setOptions({ headerShown: false });
    
        // Restore the Drawer header when leaving the screen
        return () => {
          parent?.setOptions({ headerShown: true });
        };
      }, [navigation]);

      
    return (
        <View style={styles.pdf_container}>
            <ProgressBar progress={progress} color="#0000ff" />
            <PDF
                trustAllCerts={false}
                source={source}
                onLoadProgress={(percent) => {
                    setProgress(percent / 100); // Convert percent to a fraction
                }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf_content}
            />
        </View>
    );
}

export default ShowPDF;
