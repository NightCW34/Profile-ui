import React from "react";
import { Center, Heading, ScrollView, View, VStack, Text } from "native-base";
import { StyleSheet } from "react-native";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const AppSectionList = () => {
  return (
    <Center h="90%" w="100%">
      <ScrollView w={"100%"} h="80" showsVerticalScrollIndicator={false}>
        <View mt="3" mb="4">
          <Heading fontSize="lg" m={5}>
            My Fiver
          </Heading>
        </View>
        <VStack flex="1">
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <MaterialCommunityIcons
                name="diamond-stone"
                size={24}
                color="gray"
              />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Get Inspired
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <MaterialCommunityIcons name="heart" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Saved Gigs
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <MaterialCommunityIcons name="lock" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              My Interest
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </VStack>
        <View mt="8" mb="4" m={5}>
          <Heading fontSize="lg">Buying</Heading>
        </View>
        <VStack flex="1">
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <FontAwesome5 name="clipboard" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Post a Request
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <FontAwesome5 name="pen-alt" size={17} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Manage Request
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </VStack>
        <View mt="8" mb="4" m={5}>
          <Heading fontSize="lg">General</Heading>
        </View>
        <VStack flex="1">
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <Ionicons name="settings" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Setting
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <FontAwesome5 name="dot-circle" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Show online Status
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <MaterialIcons name="payments" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Payments
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <FontAwesome5 name="telegram-plane" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Invite Friends
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <FontAwesome5 name="money-bill" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Become a Seller
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View bg={"coolGray.100"} h={10} flexDir={"row"} flex={1}>
            <View justifyContent={"center"} pl={4}>
              <FontAwesome name="life-saver" size={24} color="gray" />
            </View>
            <Text alignSelf={"center"} fontSize={15} pl={4}>
              Support
            </Text>
            <View justifyContent="center" alignItems="flex-end" flex={1} pr={4}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </VStack>
      </ScrollView>
    </Center>
  );
};

export default AppSectionList;

const styles = StyleSheet.create({
  textlist_container: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },
});
