import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import Spacing from "@/constants/Spacing";
import { Asset } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  info: Asset;
  active: boolean;
  onPress: () => void;
};

const AssetInfo: React.FC<Props> = ({ info, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Spacing,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            height: Spacing * 4,
            width: Spacing * 4,
            borderRadius: Spacing * 10,
            marginRight: Spacing,
          }}
          source={info.icon}
        />
        <View>
          <Text
            style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
            }}
          >
            {info.title}
          </Text>
          <Text
            style={{
              color: Colors.lightText,
              fontFamily: Font["poppins-regular"],
              marginRight: Spacing * 2,
            }}
          >
            {info.marketCap}
          </Text>
        </View>
      </View>
      {active && <Ionicons name="checkmark" size={24} color={Colors.primary} />}
    </TouchableOpacity>
  );
};

export default AssetInfo;
