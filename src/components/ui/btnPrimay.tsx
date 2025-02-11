import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  GestureResponderEvent,
} from "react-native";
import { Colors } from "@/constants/Colors";

interface ButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  width?: any;
}

export function BtnPrimary({
  onPress,
  title,
  children,
  width = "100%",
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, { width: width }]} // Aplicando opacidade ao pressionar
    >
      <Text style={styles.buttonText}>{title ? title : children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.btnPrimary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
    justifyContent: "center", // Centralizando conteúdo
    alignItems: "center", // Centralizando conteúdo
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
