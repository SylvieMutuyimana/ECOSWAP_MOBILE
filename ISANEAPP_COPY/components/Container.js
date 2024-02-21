import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const Container = ({ onBackPress, onPressablePress }) => {
  return (
    <View style={styles.backParent}>
      <Pressable style={styles.back} onPress={onBackPress}>
        <Pressable style={styles.pressable} onPress={onPressablePress}>
          <Text style={styles.text}>{`<--`}</Text>
        </Pressable>
      </Pressable>
      <Text style={styles.skip}>Skip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: "100%",
    width: "100%",
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    color: Color.white,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.inter,
  },
  pressable: {
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  back: {
    width: 55,
    height: 33,
  },
  skip: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    textAlign: "right",
    width: 87,
    height: 30,
    marginLeft: 179,
    fontFamily: FontFamily.inter,
  },
  backParent: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: Padding.p_xs,
  },
});

export default Container;
