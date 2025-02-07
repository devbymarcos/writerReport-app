import { StyleSheet, Text, View, TextInputProps } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

interface InputProps extends TextInputProps {
  label?: string;
  items: string[];
  value: string;
  setValue: (value: string) => void;
}
export default function Select({
  label,
  items,
  value,
  setValue,
  ...props
}: InputProps) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => setValue(itemValue)}
        >
          {items.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: "#495057",
    marginBottom: 10,
    fontWeight: "500",
  },
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 6,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#212529",
    marginBottom: 15,
  },
});
