import React, {FC, memo, useState} from 'react'
import {Text, View} from '../../components/Themed';
import {Button, TextInput} from "react-native-paper";
import {StyleSheet} from "react-native";

export type LoginScreenType = {
    logIn: (email: string, password: string) => void
}

export const LoginScreen: FC<LoginScreenType> = memo(props => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [eye, setEye] = useState<boolean>(true);

    const changeEmail = (text: string) => setEmail(text);
    const changePassword = (text: string) => setPassword(text);

    const login = () => props.logIn(email, password);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In CookWork</Text>
            <View style={styles.form}>
                <TextInput onChangeText={text => changeEmail(text)} label={'Email'}/>
                <TextInput style={styles.input}
                           secureTextEntry={eye}
                           right={<TextInput.Icon name="eye" onPress={() => setEye(eye => !eye)}/>}
                           onChangeText={text => changePassword(text)} label={'Password'}/>
                <Text style={styles.textInfo}>Forgot password</Text>
                <View style={styles.buttons}>
                    <Button style={styles.button} mode={'contained'} onPress={() => login()}>Log In</Button>
                    <Button style={styles.button} mode={'contained'}>Sign Up</Button>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    form: {
        marginTop: 40,
    },
    input: {
        marginTop: 30,
    },
    textInfo: {
        textAlign: 'right',
        marginTop: 25,
        marginBottom: 25,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    button: {
        marginRight: 10,
        width: '40%',
    },

});
