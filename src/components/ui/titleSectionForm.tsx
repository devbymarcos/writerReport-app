import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TitleSectionFormProps {
  title: string;
}

export default function TitleSectionForm({ title }: TitleSectionFormProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
