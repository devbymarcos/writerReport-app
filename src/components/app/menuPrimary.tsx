import { StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ClipboardPlus, Home, List } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

export default function MenuPrimary() {
  return (
    <View style={styles.menu}>
      <Link style={[styles.btn, styles.btnHome]} href="/" replace>
        <Home color={Colors.colorIconsLight} size={36} />
      </Link>
      <Link style={[styles.btnInit]} href="/action" replace>
        {/* <Text style={styles.btnInitText}>Iniciar</Text> */}
        <ClipboardPlus color={Colors.colorIconsLight} size={36} />
      </Link>
      <Link style={[styles.btn]} href="/list" replace>
        <List color={Colors.colorIconsLight} size={36} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#333",
    paddingHorizontal: 9,
    paddingVertical: 9,
  },
  btn: {
    padding: 10,
  },
  btnHome: {
    // backgroundColor: "#353b48",
  },
  btnInit: {
    borderRadius: 9999,
    // paddingHorizontal: 25,
    // paddingVertical: 10,
    padding: 15,
  },
  btnInitText: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 15,
    textTransform: "uppercase",
  },
});
