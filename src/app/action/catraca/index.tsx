import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import TitleCheck from "./TitleCheck";
import { useForm } from "react-hook-form";
import StatusAndDataCatraca from "./ StatusAndDataCatraca";
import CleaningActions from "./CleaningActions";
import InspectionOfEssentialResources from "./InspectionOfEssentialResources";
import FaceReader from "./FaceReader";

export default function Rep() {
  const { control } = useForm();
  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="catraca preventiva" />
        <TitleCheck control={control} />
        <StatusAndDataCatraca control={control} />
        <CleaningActions control={control} />
        <InspectionOfEssentialResources control={control} />
        <FaceReader control={control} />
        <View>
          <BtnPrimary title="Salvar" onPress={() => {}} />
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
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
