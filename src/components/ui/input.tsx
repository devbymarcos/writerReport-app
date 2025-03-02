import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TextInputProps,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor="#6c757d"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#495057",
    marginBottom: 5,
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
  },
});
