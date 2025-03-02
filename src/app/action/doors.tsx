import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/TitleCheck";
import Conclusion from "@/components/forms/doors/Conclusion";
import ElectromagneticLock from "@/components/forms/doors/ElectromagneticLock";
import DoorSpring from "@/components/forms/doors/DoorSpring";
import DoorInspect from "@/components/forms/doors/DoorInspect";
import CardReader from "@/components/forms/doors/CardReader";
import PacriKey from "@/components/forms/doors/PacriKey";
import EmergencyButton from "@/components/forms/doors/EmergencyButton";
import CableManagement from "@/components/forms/doors/CableManagement";
import AccessControlPanel from "@/components/forms/doors/AccessControlPanel";
import PowerSource from "@/components/forms/doors/PowerSource";
import { getTasksById } from "@/service/getTaskbyId";
import { updateTask } from "@/service/updateTask";
import { toast } from "sonner-native";

interface TaskData {
  id: number;
  content: string;
}

export default function Doors() {
  const { idTask, id } = useLocalSearchParams();
  const [data, setData] = useState<any>(null);
  const { replace } = useRouter();

  const { control, handleSubmit } = useForm({
    values: data,
  });

  async function save(data: any) {
    try {
      if (!idTask) {
        const response = await registerTask({
          id_ticket: Number(id),
          content: JSON.stringify({ type: "doors", ...data }),
        });
        if ((response?.lastInsertRowId ?? 0) > 0) {
          toast.success("Tarefa salva com sucesso!");
          replace(`/action/task?id=${id}`);
        }
      } else {
        const updateResponse = await updateTask({
          idTask: Number(idTask),
          content: JSON.stringify({ type: "doors", ...data }),
        });
        if (updateResponse?.changes ?? 0 > 0) {
          toast.success("Tarefa atualizada com sucesso!");
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
        <TitleForm title="Portas preventiva" />
        <TitleCheck control={control} />
        <ElectromagneticLock control={control} />
        <DoorSpring control={control} />
        <DoorInspect control={control} />
        <CardReader control={control} />
        <PacriKey control={control} />
        <EmergencyButton control={control} />
        <CableManagement control={control} />
        <AccessControlPanel control={control} />
        <PowerSource control={control} />
        <Conclusion control={control} />
        <View>
          <BtnPrimary title="Salvar" onPress={handleSubmit(save)} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
    padding: 10,
    paddingBottom: 150,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
