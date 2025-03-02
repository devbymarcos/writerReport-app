import TitleCheck from "@/components/forms/TitleCheck";
import BatteryVehicle from "@/components/forms/vehicleMonth/BatteryVehicle";
import BeltsAndHoses from "@/components/forms/vehicleMonth/BeltsAdnHoses";
import Brakes from "@/components/forms/vehicleMonth/Brakes";
import Fluids from "@/components/forms/vehicleMonth/Fluids";
import GeneralInspection from "@/components/forms/vehicleMonth/GeneralInspection";
import NoConformities from "@/components/forms/vehicleMonth/NoConformities";
import Suspension from "@/components/forms/vehicleMonth/Suspension";
import Tires from "@/components/forms/vehicleMonth/Tires";
import Vehicle from "@/components/forms/vehicleMonth/Vehicle";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { Colors } from "@/constants/Colors";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, ScrollView, View } from "react-native";
import { toast } from "sonner-native";
import { updateTask } from "@/service/updateTask";
import { getTasksById } from "@/service/getTaskbyId";
import { useState, useEffect } from "react";

interface TaskData {
  id: number;
  content: string;
}

export default function InspectionVehicleMonth() {
  const { replace } = useRouter();
  const { idTask, id } = useLocalSearchParams();
  const [data, setData] = useState<any>(null);
  const { control, handleSubmit, reset } = useForm({
    values: data,
    defaultValues: {
      date: new Date(),
    },
  });

  async function save(data: any) {
    try {
      if (!idTask) {
        const response = await registerTask({
          id_ticket: Number(id),
          content: JSON.stringify({ type: "inspectionVehicleMonth", ...data }),
        });
        if ((response?.lastInsertRowId ?? 0) > 0) {
          toast.success("Tarefa salva com sucesso!");
          reset();
          replace(`/action/task?id=${id}`);
        }
      } else {
        const updateResponse = await updateTask({
          idTask: Number(idTask),
          content: JSON.stringify({ type: "inspectionVehicleMonth", ...data }),
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

  const getDataTask = async (idTask: number) => {
    const data = (await getTasksById(idTask)) as TaskData[];
    if (!data?.[0]?.content) return;
    const dataParse = JSON.parse(data[0].content) as {
      type: string;
      titleCheck: string;
      [key: string]: any;
    };
    console.log(dataParse);
    setData(dataParse);
  };

  useEffect(() => {
    if (idTask) {
      getDataTask(Number(idTask));
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Inspeção Mensal de Veículos" />
        <TitleCheck control={control} />
        <Vehicle control={control} />
        <Fluids control={control} />
        <Tires control={control} />
        <Brakes control={control} />
        <BatteryVehicle control={control} />
        <Suspension control={control} />
        <BeltsAndHoses control={control} />
        <GeneralInspection control={control} />
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
