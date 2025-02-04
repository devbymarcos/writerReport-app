import Card from "@/components/ui/card";
import Input from "@/components/ui/input";

import { Text, StyleSheet } from "react-native";

export default function InitTicket() {
  return (
    <Card>
      <Text style={styles.title}>Dados Iniciais:</Text>
      <Input label="Numero ticket:" keyboardType="numeric" />
      <Input label="Data:" />
      <Input label="Titulo ticket:" />
      <Input label="Empresa Contratante:" />
      <Input label="Quem acompanhou ou liberou o trabalho:" />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,

    fontSize: 20,
  },
});
