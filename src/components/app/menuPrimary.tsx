import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Home, List, Plus } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

export default function MenuPrimary() {
  return (
    <View style={styles.menu}>
      <Link style={[styles.btn, styles.btnHome]} href="/" replace>
        <Home color={Colors.colorIconsLight} size={30} />
      </Link>
      <Link style={[styles.btn]} href="/list" replace>
        <List color={Colors.colorIconsLight} size={30} />
      </Link>
      <Link style={[styles.btn, { flex: 1 }]} href="/action" replace>
        <View style={styles.btnInit}>
          {/* <Plus color={Colors.colorIconsLight} size={30} /> */}
          <Text style={styles.btnInitText}>Iniciar ticket</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#333",
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 9999,
    marginHorizontal: 5,
  },
  btn: {
    padding: 20,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 9999,
    borderWidth: 2,
    // borderColor: "#fff",
  },
  btnHome: {
    backgroundColor: "#353b48",
  },
  btnInit: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    fontSize: 20,
    color: "#fff",
  },
  btnInitText: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
