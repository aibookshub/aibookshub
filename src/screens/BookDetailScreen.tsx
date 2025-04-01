// trustAllCerts={false}

import PDF from "react-native-pdf";
import 'expo-dev-client';
import React, { useState } from "react";
import { View } from 'react-native';
import styles from "@/src/styles/bookstyles";
import { ProgressBar } from "react-native-paper";

const source = {
    uri: "https://aibookshub.github.io/aibookshub_data/bs/aichatgpt/Beginning_ChatGPT_for_Python_Build_Intelligent_Applications.pdf",
    cache: true,
};

function ShowPDF() {
    const [progress, setProgress] = React.useState(0);
    console.log("Rendering PDF component...");
    
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
