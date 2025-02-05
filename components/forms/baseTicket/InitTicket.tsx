import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { createTables } from "@/database/schema";
import { storeTicket } from "@/store/storeTicket";
import { useEffect } from "react";

import { Text, StyleSheet } from "react-native";

export default function InitTicket() {
  const {
    setNumerTicket,
    setDate,
    setTitleTicket,
    setNameBusiness,
    setFollowed,
  } = storeTicket();

  return (
    <Card>
      <Text style={styles.title}>Dados Iniciais:</Text>
      <Input
        label="Numero ticket:"
        onChangeText={setNumerTicket}
        keyboardType="numeric"
      />
      <Input label="Data:" onChangeText={setDate} />
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
});
