import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Colors } from "@/constants/Colors";
import { storeTicket } from "@/store/storeTicket";
import { ArrowDown, Calendar } from "lucide-react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller } from "react-hook-form";
import { Text, StyleSheet, View, Pressable } from "react-native";

import React from "react";

export default function EditInitTicket({
  control,
  setValue,
}: {
  control: any;
  setValue: any;
}) {
  const { modalEditVisible, setModalEditVisible } = storeTicket();
  const [show, setShow] = useState(false);
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Card style={{ flex: 1 }}>
      <View style={styles.boxModalClose}>
        <Text style={styles.title}>Atualize a atividade:</Text>
        <Pressable
          style={styles.modalClose}
          onPress={() => setModalEditVisible(!modalEditVisible)}
        >
          <ArrowDown color="#fff" />
        </Pressable>
      </View>
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
                mode={"date"}
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
  boxModalClose: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  modalClose: {
    padding: 10,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 9999,
  },
  boxDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
