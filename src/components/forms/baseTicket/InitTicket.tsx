import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { storeTicket } from "@/store/storeTicket";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";
import { Controller } from "react-hook-form";
import { Calendar } from "lucide-react-native";

interface InitTicketProps {
  control: any;
  setValue: any;
}

export default function InitTicket({ control, setValue }: InitTicketProps) {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Card>
      <Text style={styles.title}>Dados Iniciais:</Text>
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
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={field.value ? new Date(field.value) : new Date()}
                mode={mode}
                is24Hour={true}
                onChange={(_, selectedDate) => {
                  setShow(false);
                  if (selectedDate) {
                    setValue("date", selectedDate, {
                      shouldValidate: true,
                    }); // Atualiza o campo
                  }
                }}
              />
            )}
            <View style={styles.boxDate}>
              <View style={{ width: "90%" }}>
                <Input
                  label="Data:"
                  value={
                    field.value
                      ? new Date(field.value).toLocaleDateString()
                      : ""
                  }
                />
              </View>
              <View>
                <Pressable onPress={showDatepicker}>
                  <Calendar color="#000" />
                </Pressable>
              </View>
            </View>
          </>
        )}
      />
      <Controller
        control={control}
        name="titleTicket"
        render={({ field }) => (
          <Input
            label="Titulo ticket:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="nameBusiness"
        render={({ field }) => (
          <Input
            label="Empresa Contratante:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="followed"
        render={({ field }) => (
          <Input
            label="Quem acompanhou ou liberou o trabalho:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="operator"
        render={({ field }) => (
          <Input
            label="Técnico:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 20,
  },
  boxDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
