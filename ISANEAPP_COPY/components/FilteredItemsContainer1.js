import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AboutContainer from "./AboutContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FilteredItemsContainer1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.soldItems, styles.parentFlexBox]}>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={[styles.text, styles.textTypo]}>{`<--`}</Text>
        </Pressable>
        <Text style={[styles.description, styles.textTypo]}>
          Phone- Iphone 4
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-175.png")}
        />
      </View>
      <AboutContainer
        dimensionsCode={require("../assets/vector7.png")}
        descriptionBackgroundColor="#fff"
        onVectorPress={() => navigation.navigate("Item")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "800",
    width: 27,
    height: 18,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  description: {
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    width: 99,
    marginLeft: 83,
  },
  frameChild: {
    width: 4,
    height: 17,
    marginLeft: 83,
    overflow: "hidden",
  },
  parent: {
    flexDirection: "row",
  },
  soldItems: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_mini,
  },
});

export default FilteredItemsContainer1;
