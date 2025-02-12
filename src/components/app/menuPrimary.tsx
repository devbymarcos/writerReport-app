import { StyleSheet, View, Text, ViewComponent } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ClipboardPlus, Home, List } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

export default function MenuPrimary() {
  return (
    <View style={styles.menu}>
      <Link style={[styles.btn]} href="/" replace>
        <View style={styles.btnBox}>
          <Home color={Colors.colorIconsDark} size={18} />
          <Text style={styles.btnText}>Home</Text>
        </View>
      </Link>
      <Link style={[styles.btn]} href="/action" replace>
        <View style={styles.btnBox}>
          <ClipboardPlus color={Colors.colorIconsDark} size={18} />
          <Text style={styles.btnText}>Iniciar</Text>
        </View>
      </Link>
      <Link style={[styles.btn]} href="/reports" replace>
        <View style={styles.btnBox}>
          <List color={Colors.colorIconsDark} size={18} />
          <Text style={styles.btnText}>Relatórios</Text>
        </View>
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
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  btn: {
    padding: 10,
    flexDirection: "column",
  },
  btnBox: {
    gap: 4,
    alignItems: "center",
  },
  btnText: {
    color: "#000",
    fontSize: 11,
  },
});
