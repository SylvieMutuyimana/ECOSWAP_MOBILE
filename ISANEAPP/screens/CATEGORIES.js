import * as React from "react";
    import {Text, StyleSheet, View} from "react-native";
import {Image} from "expo-image";
import TITLEPAGE from "../components/TITLEPAGE";
import HomeAppliances from "../components/HomeAppliances";
import ContainerItem3 from "../components/ContainerItem3";
import ContainerItem2 from "../components/ContainerItem2";
import ContainerItem1 from "../components/ContainerItem1";
import ContainerItem from "../components/ContainerItem";
import NavCategories from "../components/NavCategories";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
    
const CATEGORIES = () => {

  return (
    <View style={[styles.categories1, styles.categoriesParentFlexBox]}><TITLEPAGE hOME={`CATEGORIES
`} tITLEPAGEPosition="unset" fluentnavigation16FilledIOverflow="hidden" />
      <View style={[styles.categoriesParent, styles.categoriesParentFlexBox]}>
        <View style={[styles.categories, styles.itemsSpaceBlock]}>
          <Image style={styles.cursorIconLayout} contentFit="cover" source={require("../assets/left-cursor.png")} />
          <View style={[styles.homeAppliancesParent, styles.categoriesParentFlexBox]}><HomeAppliances homeAppliancesYoullLoveAn={require("../assets/5homeappliancesyoullloveandrelyoneveryday1-11.png")} homeAppliancesPosition="unset" homeAppliancesBackgroundColor="unset" frameViewBorderStyle="unset" frameViewBorderColor="unset" homeApplicancesFontWeight="unset" />
            <View style={styles.homeAppliances}>
              <View style={styles.istockphoto583851138612x612Wrapper}>
                <Image style={styles.istockphoto583851138612x612Icon} contentFit="cover" source={require("../assets/istockphoto583851138612x612-14.png")} />
              </View>
              <Text style={[styles.phonestablets, styles.phonestabletsTypo]}>Phones/Tablets</Text>
            </View><CategoryFilterContainer productCode={require("../assets/download-1-11.png")} categoryDescription="Computers/TVs" propMarginLeft={15} propHeight={79} />
          </View>
          <Image style={[styles.rightCursorIcon, styles.cursorIconLayout]} contentFit="cover" source={require("../assets/right-cursor.png")} />
        </View>
        <View style={[styles.items, styles.itemsSpaceBlock]}>
          <View style={styles.homeAppliancesWrapper}>
            <Text style={[styles.homeAppliances1, styles.phonestabletsTypo]}>HOME APPLIANCES</Text>
          </View>
          <View style={[styles.items1, styles.categoriesParentFlexBox]}><ContainerItem3 /><ContainerItem2 /><ContainerItem1 /><ContainerItem /><ContainerItem /><ContainerItem /><ContainerItem /><ContainerItem />
          </View>
        </View>
      </View><NavCategories navCategoriesPosition="unset" navCategoriesBorderStyle="unset" navCategoriesBorderColor="unset" />
    </View>);
};

const styles = StyleSheet.create({
  categoriesParentFlexBox: {
    alignItems: "center",
    overflow: "hidden"
  },
  itemsSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden"
  },
  phonestabletsTypo: {
    height: 13,
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    fontWeight: "600"
  },
  cursorIconLayout: {
    height: 20,
    width: 10
  },
  istockphoto583851138612x612Icon: {
    width: 77,
    height: 70
  },
  istockphoto583851138612x612Wrapper: {
    top: 11,
    left: 18,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.orangeLighter,
    borderStyle: "solid",
    borderColor: Color.grey,
    borderWidth: 1,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden"
  },
  phonestablets: {
    top: 72,
    left: 0,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    position: "absolute",
    width: 95
  },
  homeAppliances: {
    borderRadius: Border.br_mini,
    height: 95,
    marginLeft: 15,
    width: 95,
    overflow: "hidden"
  },
  homeAppliancesParent: {
    marginLeft: 8.5,
    flexDirection: "row"
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
    flexDirection: "row"
  },
  homeAppliances1: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 124
  },
  homeAppliancesWrapper: {
    width: 325,
    flexDirection: "row",
    overflow: "hidden"
  },
  items1: {
    backgroundColor: Color.colorMediumblue_300,
    marginTop: 5
  },
  items: {
    paddingHorizontal: Padding.p_mid_5,
    marginTop: 10
  },
  categoriesParent: {
    width: 360,
    height: 676
  },
  categories1: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_28xl
  }
});

export default CATEGORIES;
