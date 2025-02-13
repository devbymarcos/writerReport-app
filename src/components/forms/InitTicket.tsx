import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";
import { Controller } from "react-hook-form";
import { Calendar } from "lucide-react-native";
import MessageInputValidation from "@/components/forms/MessageInputValidation";

interface InitTicketProps {
  control: any;
  setValue: any;
  error: any;
}

export default function InitTicket({
  control,
  setValue,
  error,
}: InitTicketProps) {
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
        rules={{
          required: "Numero do ticket  obrigatorio",
        }}
        render={({ field }) => (
          <>
            <Input
              label="Numero ticket:"
              value={field.value}
              onChangeText={field.onChange}
              keyboardType="phone-pad"
            />
            <MessageInputValidation error={error} name="numberTicket" />
          </>
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
        rules={{
          required: "Preencha o titulo",
        }}
        render={({ field }) => (
          <Input
            label="Titulo ticket:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <MessageInputValidation error={error} name="titleTicket" />
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
