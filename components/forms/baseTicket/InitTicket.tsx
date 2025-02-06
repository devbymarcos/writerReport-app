import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { storeTicket } from "@/store/storeTicket";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";

import { Calendar } from "lucide-react-native";

export default function InitTicket() {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);
  const {
    setNumberTicket,
    date,
    setDate,
    setTitleTicket,
    setNameBusiness,
    setFollowed,
  } = storeTicket();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

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
      <Input
        label="Numero ticket:"
        onChangeText={setNumberTicket}
        keyboardType="numeric"
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <View style={styles.boxDate}>
        <View style={{ width: "90%" }}>
          <Input label="Data:" value={date.toLocaleDateString()} />
        </View>
        <View>
          <Pressable onPress={showDatepicker}>
            <Calendar color="#000" />
          </Pressable>
        </View>
      </View>
      <Input label="Titulo ticket:" onChangeText={setTitleTicket} />
      <Input label="Empresa Contratante:" onChangeText={setNameBusiness} />
      <Input
        label="Quem acompanhou ou liberou o trabalho:"
        onChangeText={setFollowed}
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
