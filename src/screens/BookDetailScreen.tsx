// trustAllCerts={false}

import { StatusBar, SafeAreaView, useWindowDimensions, ActivityIndicator, Text } from "react-native";
import PDF from "react-native-pdf";
import 'expo-dev-client';
import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from 'react-native';
import styles from "@/src/styles/bookstyles";
import { ProgressBar } from "react-native-paper";

const source = {
    uri: "https://aibookshub.github.io/aibookshub_data/bs/aichatgpt/Beginning_ChatGPT_for_Python_Build_Intelligent_Applications.pdf",
    cache: true,
};

function RateTheApp() {
    const { width, height } = useWindowDimensions();
    const [isLoading, setIsLoading] = React.useState(true);
    const [progress, setProgress] = React.useState(0);

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

export default RateTheApp;
