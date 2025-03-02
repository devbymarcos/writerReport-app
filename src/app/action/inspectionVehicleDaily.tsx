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
import { registerTask } from "@/service/registerTask";
import { updateTask } from "@/service/updateTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, ScrollView, View } from "react-native";
import { toast } from "sonner-native";

export default function InspectionVehicleDaily() {
  const { replace } = useRouter();
  const { idTask, id } = useLocalSearchParams();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
    },
  });

  async function save(data: any) {
    try {
      if (!idTask) {
        const response = await registerTask({
          id_ticket: Number(id),
          content: JSON.stringify({ type: "inspectionVehicleDaily", ...data }),
        });
        if ((response?.lastInsertRowId ?? 0) > 0) {
          toast.success("Tarefa salva com sucesso!");
          reset();
          replace(`/action/task?id=${id}`);
        }
      } else {
        const updateResponse = await updateTask({
          idTask: Number(idTask),
          content: JSON.stringify({ type: "inspectionVehicleDaily", ...data }),
        });
        if (updateResponse?.changes ?? 0 > 0) {
          toast.success("Tarefa atualizada com sucesso!");
          reset();
          replace(`/action/task?id=${id}`);
        }
      }
    } catch (error) {
      toast.error("Erro ao salvar tarefa");
      console.error(error);
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
