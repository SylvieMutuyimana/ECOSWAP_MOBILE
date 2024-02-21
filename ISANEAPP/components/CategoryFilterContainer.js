import * as React from "react";
    import {Image} from "expo-image";
import {StyleSheet, View, Text, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import HomeAppliances from "./HomeAppliances";
import HomeAppliancesContainerPhonesT from "./HomeAppliancesContainerPhonesT";
import { Color, Padding } from "../GlobalStyles";
    
const CategoryFilterContainer = () => {
const navigation = useNavigation();

  return (
    <View style={[styles.categories, styles.categoriesFlexBox]}>
      <Image style={styles.cursorIconLayout} contentFit="cover" source={require("../assets/left-cursor.png")} />
      <View style={[styles.homeAppliancesParent, styles.categoriesFlexBox]}><HomeAppliances homeAppliancesYoullLoveAn={require("../assets/5homeappliancesyoullloveandrelyoneveryday1-11.png")} homeAppliancesPosition="unset" homeAppliancesBackgroundColor="unset" frameViewBorderStyle="unset" frameViewBorderColor="unset" homeApplicancesFontWeight="unset" onHomeAppliancesPress={() => navigation.navigate("CATEGORIES1")} /><HomeAppliancesContainerPhonesT dimensionsCode={require("../assets/istockphoto583851138612x612-14.png")} propMarginLeft={15} /><HomeAppliancesContainer1 productCode={require("../assets/download-1-11.png")} categoryDescription="Computers/TVs" propMarginLeft={15} propHeight={79} />
      </View>
      <Image style={[styles.rightCursorIcon, styles.cursorIconLayout]} contentFit="cover" source={require("../assets/right-cursor.png")} />
    </View>);
};

const styles = StyleSheet.create({
  categoriesFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden"
  },
  cursorIconLayout: {
    height: 20,
    width: 10
  },
  homeAppliancesParent: {
    marginLeft: 8.5
  },
  rightCursorIcon: {
    marginLeft: 8.5
  },
  categories: {
    backgroundColor: Color.colorDarkslategray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0
  }
});

export default CategoryFilterContainer;
