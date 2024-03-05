import React from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../../config/firebase";
import { Button } from "tamagui";

const List = ({ navigation }) => {
    return (
        <View>
            <Button onPress={() => navigation.navigate('details')} >Open Details</Button>
            <Button onPress={() => FIREBASE_AUTH.signOut()} >Log Out</Button>
        </View>
    );
}

export default List;
