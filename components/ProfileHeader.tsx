import React from "react";
import { View, Text, Center, Image, Icon, Box, Badge } from "native-base";

import { Feather } from "@expo/vector-icons";

const ProfileHeader = () => {
  return (
    <View>
      <Center safeArea>
        <Box
          style={{
            width: "100%",
            alignItems: "flex-end",
            paddingRight: 20,
            paddingTop: 5,
          }}
        >
          <Icon as={Feather} name="bell" color="dark.900" size={5} />
        </Box>
        <View>
          <Image
            size={130}
            borderRadius={100}
            source={{
              uri: "https://i.pinimg.com/736x/cf/0d/57/cf0d5709c1f8626f31f2ee15ad21ec44.jpg",
            }}
            alt="Alternate Text"
          />
        </View>
        <Text style={{ paddingTop: 5 }}>Fasta Mb</Text>
        <Text>Personal Balance: R$0</Text>
      </Center>
    </View>
  );
};

export default ProfileHeader;
