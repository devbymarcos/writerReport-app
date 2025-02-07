import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import StatusAndData from "./StatusAndData";
import CleaningActions from "./CleaningActions";
import InspectionOfEssentialResources from "./InspectionOfEssentialResources";
import InstallationConditions from "./InstallationConditions";
import InterviewWithHR from "./InterviewWithHR";
import Conclusion from "./Conclusion";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "./TitleCheck";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm();
  console.log(id);

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({
        titleCheck: data.titleCheck,
        stateOperation: data.stateOperation,
        brand: data.brand,
        model: data.model,
        ip: data.ip,
        ns: data.ns,
        fiscalSeal: data.fiscalSeal,
        sealWork: data.sealWork,
        cleaningExternal: data.cleaningExternal,
        cleaningPrinter: data.cleaningPrinter,
        cleaningSpoolCompartment: data.cleaningSpoolCompartment,
        installationConditionsEquipmentMounting:
          data.installationConditionsEquipmentMounting,
        installationConditionsCableOrganization:
          data.installationConditionsCableOrganization,
        installationConditionsConduitsAndRaceways:
          data.installationConditionsConduitsAndRaceways,
        installationConditionsExposureToRainSun:
          data.installationConditionsExposureToRainSun,
        inspectionDisplay: data.inspectionDisplay,
        inspectionPrinter: data.inspectionPrinter,
        inspectionKeyboard: data.inspectionKeyboard,
        inspectionReadersCardAndBiometrics:
          data.inspectionReadersCardAndBiometrics,
        inspectionCutterOrPerforator: data.inspectionCutterOrPerforator,
        frontAndRear: data.frontAndRear,
        hrInterviewEquipmentFunctioning: data.hrInterviewEquipmentFunctioning,
        hrInterviewSoftwareQuestions: data.hrInterviewSoftwareQuestions,
        nonConformitiesDescription: data.nonConformitiesDescription,
        improvementSuggestions: data.improvementSuggestions,
        pendingOrNextActions: data.pendingOrNextActions,
      }),
    });
    push(`/action/task?id=${id}`);
  }

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
