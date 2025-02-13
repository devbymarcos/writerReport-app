import { Text } from "react-native";
import React from "react";

export default function MessageInputValidation({
  error,
  name,
}: {
  error: any;
  name: string;
}) {
  if (!error[name]) return null;
  return (
    <Text style={{ color: "red", marginTop: -7 }}>{error[name].message}</Text>
  );
}
