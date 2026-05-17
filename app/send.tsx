import AssetInfo from "@/components/AssetInfo";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { assets } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Send: React.FC = () => {
  const [activeAsset, setActiveAsset] = useState<null | number>(null);

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <View style={{ paddingHorizontal: Spacing * 2 }}>
            <View>
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ position: "absolute" }}
              >
                <Ionicons name="chevron-back" size={24} color={Colors.text} />
              </TouchableOpacity>
              <Text
                style={{
                  color: Colors.text,
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: FontSize.large,
                  alignSelf: "center",
                }}
              >
                Send
              </Text>
            </View>
            <Text
              style={{
                color: Colors.text,
                fontSize: FontSize.medium,
                alignSelf: "center",
                marginTop: Spacing * 4,
              }}
            >
              Please choose asset to send
            </Text>

            <View
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.lightBackground,
                marginTop: Spacing * 3,
                borderRadius: Spacing * 3,
              }}
            >
              {assets.map((asset) => (
                <AssetInfo
                  active={activeAsset === asset.id}
                  onPress={() => setActiveAsset(asset.id)}
                  key={asset.id}
                  info={asset}
                />
              ))}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          backgroundColor: Colors.primary,
          bottom: Spacing * 4,
          width: "90%",
          paddingVertical: Spacing * 2,
          paddingHorizontal: Spacing * 3,
          alignItems: "center",
          alignSelf: "center",
          borderRadius: Spacing * 5,
        }}
      >
        <Text
          style={{
            color: Colors.onPrimary,
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.large,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Send;
