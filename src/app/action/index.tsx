import InitTicket from "@/components/forms/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { Colors } from "@/constants/Colors";
import { registerTicket } from "@/service/registerTicket";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, ScrollView, View, ToastAndroid } from "react-native";

export default function Home() {
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date(),
    },
  });

  async function save(data: any) {
    const response = await registerTicket({
      numberTicket: data.numberTicket,
      titleTicket: data.titleTicket,
      date: String(data.date),
      nameBusiness: data.nameBusiness,
      followed: data.followed,
      operator: data.operator,
    });

    if (response?.lastInsertRowId) {
      push(
        `/action/task?id=${response.lastInsertRowId}&ticket=${data.numberTicket}`
      );
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Abertura da Atividade" />
        <InitTicket control={control} setValue={setValue} error={errors} />
        <BtnPrimary title="Iniciar Atividade" onPress={handleSubmit(save)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    paddingBottom: 150,
    backgroundColor: Colors.bgPrimary,
  },
});
