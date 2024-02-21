import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PriceListContainer from "./PriceListContainer";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const NewItemsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newItems}>
      <Text style={styles.newItems1}>NEW ITEMS</Text>
      <View style={[styles.item1Parent, styles.parentFlexBox]}>
        <Pressable
          style={[styles.item1, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Item")}
        >
          <Image
            style={styles.mainQimg01b073ed640cf6946b11Icon}
            contentFit="cover"
            source={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-1.png")}
          />
          <View style={styles.descriptionParent}>
            <Text
              style={[styles.description, styles.rwfTypo]}
            >{`Cracked Screen Dell  ... `}</Text>
            <View style={[styles.rwfParent, styles.parentFlexBox]}>
              <Text style={[styles.rwf, styles.rwfTypo]}>91,000 rwf</Text>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
        </Pressable>
        <PriceListContainer
          phoneDescription={require("../assets/istockphoto583851138612x612-11.png")}
          phoneIssueDescription="Smashed screen ipho ... "
          phonePrice="45,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/nokia-1.png")}
          phoneIssueDescription="Nokia phone can’t start ... "
          phonePrice="11,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/spoil-blender-1630388828-6a58d22e-1.png")}
          phoneIssueDescription="Smashed screen ipho ... "
          phonePrice="12,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-1.png")}
          phoneIssueDescription="Cracked Screen Dell  ... "
          phonePrice="91,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/istockphoto583851138612x612-11.png")}
          phoneIssueDescription="Smashed screen ipho ... "
          phonePrice="45,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/nokia-1.png")}
          phoneIssueDescription="Nokia phone can’t start ... "
          phonePrice="11,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/spoil-blender-1630388828-6a58d22e-1.png")}
          phoneIssueDescription="Smashed screen ipho ... "
          phonePrice="12,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-1.png")}
          phoneIssueDescription="Cracked Screen Dell  ... "
          phonePrice="91,000 rwf"
        />
        <PriceListContainer
          phoneDescription={require("../assets/istockphoto583851138612x612-11.png")}
          phoneIssueDescription="Smashed screen ipho ... "
          phonePrice="45,000 rwf"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  rwfTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  newItems1: {
    fontSize: FontSize.size_4xs,
    fontWeight: "600",
    width: 303,
    height: 13,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  mainQimg01b073ed640cf6946b11Icon: {
    width: 60,
    height: 38,
  },
  description: {
    width: 55,
    height: 20,
  },
  rwf: {
    fontWeight: "700",
    width: 52,
    height: 11,
  },
  vectorIcon: {
    width: 6,
    height: 6,
    marginLeft: 3,
  },
  rwfParent: {
    marginTop: 4,
  },
  descriptionParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    overflow: "hidden",
  },
  item1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_2xs,
  },
  item1Parent: {
    width: 358,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: 0,
    marginTop: 5,
  },
  newItems: {
    paddingHorizontal: Padding.p_12xs,
    paddingTop: Padding.p_8xs,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default NewItemsContainer;
