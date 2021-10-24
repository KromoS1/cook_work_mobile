import {StatusBar} from 'expo-status-bar';
import React from 'react';
import useColorScheme from "./hooks/useColorScheme";
import {Provider} from "react-redux";
import {store} from "./redux/Store";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from "./navigation/Navigation";

export default function App() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <Navigation colorScheme={colorScheme}/>
                <StatusBar style="auto"/>
            </Provider>
        </SafeAreaProvider>
    );
}
