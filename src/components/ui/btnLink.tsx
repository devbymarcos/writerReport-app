import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

interface ButtonLinkProps {
  title: string;
  href: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function ButtonLink({
  title,
  href,
  textColor = "#ffffff", // Cor padrão branca
  textStyle,
}: ButtonLinkProps) {
  return (
    <Link asChild href={href as any} style={[styles.button]}>
      <TouchableOpacity
        // Aplicando backgroundColor corretamente
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.btnPrimary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
    justifyContent: "center", // Garantindo que o conteúdo fique centralizado
    alignItems: "center", // Garantindo que o conteúdo fique centralizado
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
