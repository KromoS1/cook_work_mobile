import React from 'react'
import {Text, View} from "../../components/Themed";
import {RootTabScreenProps} from "../../types";

export default function ResumeContainer ({ }: RootTabScreenProps<'resume'>){
    return (
        <View>
            <Text>
                Resume
            </Text>
        </View>
    )
}
