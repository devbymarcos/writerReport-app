import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import StatusAndData from "@/components/forms/rep/StatusAndData";
import CleaningActions from "@/components/forms/rep/CleaningActions";
import InspectionOfEssentialResources from "@/components/forms/rep/InspectionOfEssentialResources";
import InstallationConditions from "@/components/forms/rep/InstallationConditions";
import InterviewWithHR from "@/components/forms/rep/InterviewWithHR";
import Conclusion from "@/components/forms/rep/Conclusion";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/rep/TitleCheck";
import { getTasksById } from "@/service/getTaskbyId";
import { updateTask } from "@/service/updateTask";
import { toast } from "sonner-native";

interface TaskData {
  id: number;
  content: string;
}

export default function Rep() {
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
          content: JSON.stringify({ type: "rep", ...data }),
        });
        if ((response?.lastInsertRowId ?? 0) > 0) {
          toast.success("Tarefa salva com sucesso!");
          replace(`/action/task?id=${id}`);
        }
      } else {
        const updateResponse = await updateTask({
          idTask: Number(idTask),
          content: JSON.stringify({ type: "rep", ...data }),
        });
        console.log(updateResponse);
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
        <TitleForm title="rep preventiva" />
        <TitleCheck control={control} />
        <StatusAndData control={control} />
        <CleaningActions control={control} />
        <InspectionOfEssentialResources control={control} />
        <InstallationConditions control={control} />
        <InterviewWithHR control={control} />
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
