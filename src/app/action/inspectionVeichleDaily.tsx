import InitTicket from "@/components/forms/InitTicket";
import TitleCheck from "@/components/forms/TitleCheck";
import Clear from "@/components/forms/vehicleDaily/Clear";
import Level from "@/components/forms/vehicleDaily/Level";
import Light from "@/components/forms/vehicleDaily/Light";
import NoConformities from "@/components/forms/vehicleDaily/NoConformities";
import Vehicle from "@/components/forms/vehicleDaily/Vehicle";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { Colors } from "@/constants/Colors";
import { registerTicket } from "@/service/registerTicket";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, ScrollView, View } from "react-native";

export default function inspectionVeichleDaily() {
  const { replace } = useRouter();
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
      date: String(data.date),
      numberTicket: data.numberTicket,
      titleTicket: data.titleTicket,
    });

    if (response?.lastInsertRowId) {
      replace(
        `/action/task?id=${response.lastInsertRowId}&ticket=${data.numberTicket}`
      );
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Inspeção Diária de Veículos" />
        <TitleCheck control={control} />
        <Vehicle control={control} />
        <Clear control={control} />
        <Level control={control} />
        <Light control={control} />
        <NoConformities control={control} />
        <BtnPrimary title="Salvar" onPress={handleSubmit(save)} />
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
