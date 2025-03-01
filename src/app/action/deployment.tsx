import TitleForm from "@/components/ui/titleForm";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TitleCheckDeployment from "@/components/forms/deployment/TitleCheckDeployment";
import { useForm } from "react-hook-form";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import InstallationSteps from "@/components/forms/deployment/InstallationSteps";
import { Colors } from "@/constants/Colors";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getTasksById } from "@/service/getTaskbyId";
import { updateTask } from "@/service/updateTask";
import { toast } from "sonner-native";

interface TaskData {
  id: number;
  content: string;
}

function Deployment() {
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
          content: JSON.stringify({ type: "deployment", ...data }),
        });
        if ((response?.lastInsertRowId ?? 0) > 0) {
          toast.success("Tarefa salva com sucesso!");
          replace(`/action/task?id=${id}`);
        }
      } else {
        const updateResponse = await updateTask({
          idTask: Number(idTask),
          content: JSON.stringify({ type: "deployment", ...data }),
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
        <TitleForm title="Implantação" />
        <TitleCheckDeployment control={control} />
        <InstallationSteps control={control} />
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
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Deployment;
