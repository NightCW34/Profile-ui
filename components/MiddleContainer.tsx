import React from "react";
import { Switch, View, Text } from "native-base";
import { StyleSheet } from "react-native";

const MiddleContainer = () => {
  return (
    <View bg="dark.900" style={Style.container_middle}>
      <View style={Style.container_text}>
        <Text bold style={{ paddingLeft: 10 }}>
          Seller Mode
        </Text>
      </View>
      <View style={Style.container_switch}>
        <Switch defaultIsChecked colorScheme="emerald" />
      </View>
    </View>
  );
};

export default MiddleContainer;

const Style = StyleSheet.create({
  container_middle: {
    width: "90%",
    alignSelf: "center",
    height: 35,
    top: "28%",
    elevation: 4,
    borderRadius: 5,
    position: "absolute",
    flexDirection: "row",
  },
  container_text: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  container_switch: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
  },
});
