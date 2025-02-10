import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { Controller } from "react-hook-form";
import Input from "@/components/ui/input";

export default function Time({ control }: { control: any }) {
  return (
    <View style={styles.container}>
      <View>
        <Controller
          control={control}
          name="numberTicket"
          render={({ field }) => (
            <Input
              label="Numero ticket:"
              value={field.value}
              onChangeText={field.onChange}
              keyboardType="phone-pad"
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  boxTime: {
    flex: 1,
    width: "15%",
  },
});
