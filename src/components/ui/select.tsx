import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { RadioButton } from "react-native-paper";

interface SelectProps {
  label: string;
  items: string[];
  value: string;
  setValue: (value: string) => void;
}

export default function Select({ label, items, value, setValue }: SelectProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RadioButton.Group onValueChange={setValue} value={value}>
        {items.map((item, index) => (
          <View key={index} style={styles.radioButton}>
            <RadioButton.Android value={item} color={Colors.primary} />
            <Text style={styles.radioLabel}>{item}</Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  radioLabel: {
    fontSize: 14,
    color: Colors.text,
    marginLeft: 8,
  },
});
