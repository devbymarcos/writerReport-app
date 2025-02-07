import { StyleSheet, Text } from "react-native";
import React from "react";

interface titleFormProps {
  title: string;
}

export default function TitleForm({ title }: titleFormProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
