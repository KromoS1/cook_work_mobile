import React from 'react'
import {Text, View} from "../../components/Themed";
import {RootTabScreenProps} from "../../types";
import {StyleSheet} from 'react-native';

export default function AccountContainer ({ navigation }: RootTabScreenProps<'account'>) {

return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate('Modal')}>Account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
});
