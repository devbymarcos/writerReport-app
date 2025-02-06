import InitTicket from "@/components/forms/baseTicket/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTicket } from "@/service/registerTicket";
import { storeTicket } from "@/store/storeTicket";
import { useRouter } from "expo-router";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { push } = useRouter();
  const { numberTicket, titleTicket, date, nameBusiness, followed } =
    storeTicket();

  async function save() {
    const response = await registerTicket({
      numberTicket,
      titleTicket,
      date: String(date),
      nameBusiness,
      followed,
    });
    if (response?.lastInsertRowId) {
      push(`/preventiva/task?id=${response.lastInsertRowId}`);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Preventiva" />
        <InitTicket />
        <BtnPrimary title="Iniciar Ticket" onPress={save} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
});
