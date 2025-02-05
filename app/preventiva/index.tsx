import InitTicket from "@/components/forms/baseTicket/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import { registerTicket } from "@/service/ticketBase/registerTicket";
import { storeTicket } from "@/store/storeTicket";
import { useRouter } from "expo-router";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function Home() {
  const { push } = useRouter();
  const { numberTicket, titleTicket, date, nameBusiness, followed } =
    storeTicket();

  async function save() {
    console.log("iniciado o execute");
    const response = await registerTicket({
      numberTicket,
      titleTicket,
      date,
      nameBusiness,
      followed,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Preventiva </Text>
      <InitTicket />
      <BtnPrimary title="Iniciar Ticket" onPress={save} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
