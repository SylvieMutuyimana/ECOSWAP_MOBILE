import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AboutContainer = ({
  dimensionsCode,
  descriptionBackgroundColor,
  onVectorPress,
}) => {
  const item2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", descriptionBackgroundColor),
    };
  }, [descriptionBackgroundColor]);

  return (
    <View style={[styles.item2, item2Style]}>
      <View
        style={[
          styles.istockphoto583851138612x612Parent,
          styles.frameParentFlexBox,
        ]}
      >
        <Image
          style={styles.istockphoto583851138612x612Icon}
          contentFit="cover"
          source={require("../assets/istockphoto583851138612x612-12.png")}
        />
        <View style={[styles.descriptionParent, styles.parentWrapperFlexBox]}>
          <Text style={[styles.description, styles.descriptionTypo]}>
            56,000 rwf
          </Text>
          <Text style={[styles.description1, styles.purchaseTypo]}>
            seller: Muhizi Mai
          </Text>
          <View style={[styles.frameWrapper, styles.parentWrapperFlexBox]}>
            <View
              style={[styles.descriptionGroup, styles.parentWrapperFlexBox]}
            >
              <Text style={[styles.description2, styles.descriptionClr]}>
                WishList
              </Text>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.descriptionWrapper, styles.frameParentFlexBox]}>
          <Text style={[styles.description3, styles.descriptionTypo]}>
            Smashed screen iphone 4, front camera broken
          </Text>
        </View>
        <View style={[styles.descriptionParent, styles.parentWrapperFlexBox]}>
          <View style={[styles.bidParent, styles.parentWrapperFlexBox]}>
            <Text style={[styles.bid, styles.bidTypo]}>Bid:</Text>
            <View style={[styles.email, styles.emailFlexBox]}>
              <Text style={[styles.email1, styles.bidTypo]}>Amount rwf</Text>
            </View>
          </View>
          <View style={[styles.loginWrapper, styles.parentWrapperFlexBox]}>
            <View style={[styles.login, styles.emailFlexBox]}>
              <Text style={[styles.purchase, styles.purchaseTypo]}>
                PURCHASE
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
          <View style={styles.parentWrapperFlexBox}>
            <Text
              style={[styles.description4, styles.descriptionTypo]}
            >{`About `}</Text>
            <Pressable style={styles.vector} onPress={onVectorPress}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={dimensionsCode}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  parentWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  descriptionTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xs,
  },
  purchaseTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xs,
  },
  descriptionClr: {
    color: Color.colorMediumblue_100,
    fontStyle: "italic",
  },
  bidTypo: {
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  emailFlexBox: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  istockphoto583851138612x612Icon: {
    height: 207,
    width: 297,
  },
  description: {
    fontWeight: "700",
    width: 71,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  description1: {
    width: 120,
    marginLeft: 22,
    color: Color.colorMediumblue_100,
    fontStyle: "italic",
  },
  description2: {
    width: 49,
    height: 10,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xs,
    color: Color.colorMediumblue_100,
  },
  vectorIcon: {
    height: 11,
    width: 10,
  },
  descriptionGroup: {
    justifyContent: "center",
  },
  frameWrapper: {
    marginLeft: 22,
    justifyContent: "center",
  },
  descriptionParent: {
    justifyContent: "center",
    marginTop: 10,
  },
  istockphoto583851138612x612Parent: {
    justifyContent: "center",
  },
  description3: {
    width: 292,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  descriptionWrapper: {
    width: 297,
    justifyContent: "center",
  },
  bid: {
    width: 22,
    height: 12,
    fontSize: FontSize.size_3xs,
    fontStyle: "italic",
  },
  email1: {
    fontSize: FontSize.size_4xs,
    width: 64,
  },
  email: {
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    padding: Padding.p_8xs,
    marginLeft: 4,
  },
  bidParent: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: 0,
    justifyContent: "center",
  },
  purchase: {
    fontWeight: "900",
    color: Color.white,
    width: 67,
  },
  login: {
    backgroundColor: Color.colorBlack,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
  },
  loginWrapper: {
    marginLeft: 10,
    justifyContent: "center",
  },
  description4: {
    fontWeight: "500",
    width: 40,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    height: 7,
    width: 10,
  },
  frameContainer: {
    width: 297,
    justifyContent: "center",
    marginTop: 10,
  },
  frameParent: {
    marginTop: 14,
    justifyContent: "center",
  },
  item2: {
    marginTop: 10,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default AboutContainer;
