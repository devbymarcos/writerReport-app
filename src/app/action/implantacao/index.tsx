import TitleForm from "@/components/ui/titleForm";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TitleCheckDeployment from "./TitleCheckDeployment";
import { useForm } from "react-hook-form";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import InstallationSteps from "./InstallationSteps";
import { Colors } from "@/constants/Colors";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";

function Implantacao() {
  const { control, handleSubmit } = useForm();
  const { id } = useLocalSearchParams();
  const { push } = useRouter();

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "rep", ...data }),
    });
    push(`/action/task?id=${id}`);
  }
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
    paddingBottom: 100,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Implantacao;
