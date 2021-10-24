import React, {memo} from 'react'
import {useAppSelector} from "../hooks/reactReduxHooks";
import {LoginScreenContainer} from "../screens/login/LoginScreenContainer";
import {ColorSchemeName} from "react-native";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from "../types";
import NotFoundScreen from "../screens/NotFoundScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import useColorScheme from "../hooks/useColorScheme";
import {FontAwesome} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import AccountContainer from "../screens/account/AccountContainer";
import ResumeContainer from "../screens/resume/ResumeContainer";

export const Navigation = memo(({colorScheme}: { colorScheme: ColorSchemeName }) => {
    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    if (!isAuth) return <LoginScreenContainer/>

    return (
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    )
})

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={LoginScreenContainer} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTabNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator initialRouteName={'account'} screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme].tint,
        }}>
            <BottomTab.Screen
                name={"resume"}
                component={ResumeContainer}
                options={({}: RootTabScreenProps<"resume">) => ({
                    title:'Resume',
                    tabBarIcon: ({color}) => <TabBarIcon name="save" color={color}/>,
                })}/>
            <BottomTab.Screen
                name={"account"}
                component={AccountContainer}
                options={({}: RootTabScreenProps<"account">) => ({
                    title:'Account',
                    tabBarIcon: ({color}) => <TabBarIcon name="user-circle-o" color={color}/>,
                })}/>
        </BottomTab.Navigator>
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
