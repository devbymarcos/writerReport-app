import React from "react";

import { Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

interface ButtonLinkProps {
  title: string;
  href: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  replace?: boolean;
}

export function ButtonLink({
  title,
  href,
  textColor = "#ffffff", // Cor padrão branca
  textStyle,
  replace,
}: ButtonLinkProps) {
  return (
    <Link href={href as any} style={[styles.button]} replace={replace}>
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.btnPrimary,
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 3,
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
    textTransform: "uppercase",
  },
});
