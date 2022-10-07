import React from "react";
import { SectionList, Center, Heading, View, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const AppSectionList = (Icon: any) => {
  const data = [
    {
      title: "My Fiverr",
      data: ["Get Inspired", "Saved Gigs", "My Interests"],
    },
    {
      title: "Buying",
      data: ["Post a Request", "Manage Request"],
    },
    {
      title: "General",
      data: [
        "Setting",
        "Show online status",
        "Payments",
        "Invite Friends",
        "Become a seller",
        "Support",
      ],
    },
  ];
  return (
    <Center h="100%" w="100%">
      <SectionList
        maxW="100%"
        w="100%"
        mb="4"
        sections={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            py="1"
            bg={"coolGray.100"}
            height={12}
            fontSize="xs"
            justifyContent={"flex-start"}
            flexDirection="row"
          >
            <View style={{ margin: 10 }}>
              <FontAwesome name={item.icon} size={20} color="black" />
            </View>
            <Text style={{ alignSelf: "center" }}>{item}</Text>
            <View style={{ margin: 10, flex: 1, alignItems: "flex-end" }}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Heading fontSize="lg" mt="8" pb="4" pl="5">
            {title}
          </Heading>
        )}
      />
    </Center>
  );
};

export default AppSectionList;
