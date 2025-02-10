import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { Controller } from "react-hook-form";
import Input from "@/components/ui/input";

export default function Time({ control }: { control: any }) {
  return (
    <Card
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        marginBottom: 10,
      }}
    >
      <View style={styles.collum2}>
        <View style={[styles.boxTime]}>
          <Controller
            control={control}
            name="hourInit"
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
            name="minuteInit"
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
      <Text> até </Text>
      <View style={styles.collum2}>
        <View style={[styles.boxTime]}>
          <Controller
            control={control}
            name="hourFinal"
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
            name="minuteFinal"
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
    </Card>
  );
}

const styles = StyleSheet.create({
  collum2: {
    flex: 1,
    flexDirection: "row",
  },
  boxTime: {
    flex: 1,
    width: "15%",
  },
});
