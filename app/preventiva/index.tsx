import InitTicket from "@/components/forms/baseTicket/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTicket } from "@/service/registerTicket";
import { storeTicket } from "@/store/storeTicket";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, ScrollView, View } from "react-native";

export default function Home() {
  const { push } = useRouter();
  const { control, handleSubmit } = useForm();
  const { date } = storeTicket();

  async function save(data: any) {
    const response = await registerTicket({
      numberTicket: data.numberTicket,
      titleTicket: data.titleTicket,
      date: String(date),
      nameBusiness: data.nameBusiness,
      followed: data.followed,
    });
    console.log(response);
    if (response?.lastInsertRowId) {
      push(
        `/preventiva/task?id=${response.lastInsertRowId}&ticket=${data.numberTicket}`
      );
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Preventiva" />
        <InitTicket control={control} />
        <BtnPrimary title="Iniciar Ticket" onPress={handleSubmit(save)} />
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
