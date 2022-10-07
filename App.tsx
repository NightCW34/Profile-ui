import React from "react";
import { NativeBaseProvider, extendTheme, View } from "native-base";
import { StyleSheet } from "react-native";

//Custom Components
import MiddleContainer from "./components/MiddleContainer";
import ProfileHeader from "./components/ProfileHeader";
import AppSectionList from "./components/AppSectionList";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <NativeBaseProvider>
      <View bg="success.400" flex={1}>
        <View style={Style.header}>
          <ProfileHeader />
        </View>
        <MiddleContainer />
        <View bg="dark.900" style={Style.body}>
          <AppSectionList />
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const Style = StyleSheet.create({
  body: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: "30%",
  },
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
});
