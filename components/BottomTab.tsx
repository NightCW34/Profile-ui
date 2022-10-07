import React from "react";
import { Box, Text, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const BottomTab = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box flex={1} bg="white" width="100%" height="100%" alignSelf="center">
      <Center flex={1}></Center>
      <HStack bg="black" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color="white"
              size="sm"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color="white"
              size="sm"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="email" />}
              color="white"
              size="sm"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "clipboard-list" : "clipboard-list"}
                />
              }
              color="white"
              size="sm"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 4 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(4)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 4 ? "account" : "account-outline"}
                />
              }
              color="white"
              size="sm"
            />
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default BottomTab;
