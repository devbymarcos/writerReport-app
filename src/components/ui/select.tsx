import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";

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
      <View style={styles.radioGroup}>
        {items.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.radioButton}
            onPress={() => setValue(item)}
          >
            <View style={styles.radio}>
              {value === item && <View style={styles.radioSelected} />}
            </View>
            <Text style={styles.radioLabel}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  radioGroup: {
    gap: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  radioLabel: {
    fontSize: 14,
    color: Colors.text,
  },
});
