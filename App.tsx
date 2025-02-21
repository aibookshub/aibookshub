import React from 'react';
import AppNavigator from '@/src/navigation/AppNavigator';
import { registerRootComponent } from 'expo';

function App() {
    return (
        <AppNavigator />
    );
}

export default App;

registerRootComponent(App);