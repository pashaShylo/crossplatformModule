import { Text, View } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View
            style={{
                backgroundColor: "#82ccdd",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "700",
                }}
            >
                Виконав Шило Павло Володимирович
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "700",
                    paddingTop: 5,
                }}
            >
                Група КН-32
            </Text>
        </View>
    );
};

export default Header;
