import InitTicket from "@/components/forms/baseTicket/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTicket } from "@/service/ticketBase/registerTicket";
import { storeTicket } from "@/store/storeTicket";
import { useRouter } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";

export default function Home() {
  const { push } = useRouter();
  const { numberTicket, titleTicket, date, nameBusiness, followed } =
    storeTicket();

  async function save() {
    const response = await registerTicket({
      numberTicket,
      titleTicket,
      date,
      nameBusiness,
      followed,
    });
    if (response?.lastInsertRowId) {
      push(`/preventiva/task?id=${response.lastInsertRowId}`);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <TitleForm title="Preventiva" />
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
    paddingBottom: 200,
  },
});
