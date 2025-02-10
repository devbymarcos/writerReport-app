import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";
import Input from "@/components/ui/input";
import Card from "@/components/ui/card";

export default function TimePause({ control }: { control: any }) {
  return (
    <>
      <View style={styles.collum2}>
        <View style={[styles.boxTime]}>
          <Controller
            control={control}
            name="hourPause"
            render={({ field }) => (
              <Input
                label="Hora:"
                value={field.value}
                onChangeText={field.onChange}
                keyboardType="phone-pad"
                maxLength={2}
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, margin: 10 }}>:</Text>
        </View>
        <View style={[styles.boxTime]}>
          <Controller
            control={control}
            name="minutePause"
            render={({ field }) => (
              <Input
                label="Minuto:"
                value={field.value}
                onChangeText={field.onChange}
                keyboardType="phone-pad"
                maxLength={2}
              />
            )}
          />
        </View>
      </View>

      <Controller
        control={control}
        name="JustifyTime"
        render={({ field }) => (
          <InputMultiplo
            label="Justifique o tempo de pause se existir?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  collum2: {
    flex: 1,
    flexDirection: "row",
  },
  boxTime: {
    flex: 1,
    justifyContent: "center",
  },
});
