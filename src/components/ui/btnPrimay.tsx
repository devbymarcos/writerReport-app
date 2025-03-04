import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  title?: string;
  onPress: () => void;
  children?: React.ReactNode;
  style?: any;
}

export function BtnPrimary({ title, onPress, children, style }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    if (isLoading) return; // Previne múltiplos cliques

    setIsLoading(true);
    try {
      await Promise.resolve(onPress());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      android_ripple={{ color: Colors.primary + "40" }}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  pressed: {
    opacity: 0.8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
