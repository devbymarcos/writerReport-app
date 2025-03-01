import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import TitleCheck from "@/components/forms/catraca/TitleCheck";
import { useForm } from "react-hook-form";
import StatusAndDataCatraca from "@/components/forms/catraca/StatusAndDataCatraca";
import CleaningActions from "@/components/forms/catraca/CleaningActions";
import InspectionOfEssentialResources from "@/components/forms/catraca/InspectionOfEssentialResources";
import FaceReader from "@/components/forms/catraca/FaceReader";
import InterviewWithClient from "@/components/forms/catraca/InterviewWithClient";
import Conclusion from "@/components/forms/rep/Conclusion";
import { useLocalSearchParams, useRouter } from "expo-router";
import { registerTask } from "@/service/registerTask";
import InstallationConditions from "@/components/forms/catraca/InstallationConditions";
import { getTasksById } from "@/service/getTaskbyId";
import { updateTask } from "@/service/updateTask";
import { toast } from "sonner-native";

interface TaskData {
  id: number;
  content: string;
}

export default function Catraca() {
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
          content: JSON.stringify({ type: "catraca", ...data }),
        });
        if ((response?.lastInsertRowId ?? 0) > 0) {
          toast.success("Tarefa salva com sucesso!");
          replace(`/action/task?id=${id}`);
        }
      } else {
        const updateResponse = await updateTask({
          idTask: Number(idTask),
          content: JSON.stringify({ type: "catraca", ...data }),
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
        <TitleForm title="Catraca preventiva" />
        <TitleCheck control={control} />
        <StatusAndDataCatraca control={control} />
        <CleaningActions control={control} />
        <InspectionOfEssentialResources control={control} />
        <InstallationConditions control={control} />
        <FaceReader control={control} />
        <InterviewWithClient control={control} />
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
    padding: 20,
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
