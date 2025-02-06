import { StyleSheet, Text, View, ScrollView } from "react-native";
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
import { storeRep } from "@/store/storeRep";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams } from "expo-router";

export default function Rep() {
  const { id } = useLocalSearchParams();
  console.log(id);
  const {
    stateOperation,
    brand,
    model,
    ip,
    ns,
    fiscalSeal,
    sealWork,
    //cleanignActions--
    cleaningExternal,
    cleaningPrinter,
    cleaningSpoolCompartment,
    //InstallationConditions--
    installationConditionsEquipmentMounting,
    installationConditionsCableOrganization,
    installationConditionsConduitsAndRaceways,
    installationConditionsExposureToRainSun,
    //InspectionOfEssentialResources--
    inspectionDisplay,
    inspectionPrinter,
    inspectionKeyboard,
    inspectionReadersCardAndBiometrics,
    inspectionCutterOrPerforator,
    frontAndRear,
    //InterviewWithHR--
    hrInterviewEquipmentFunctioning,
    hrInterviewSoftwareQuestions,
    //Conclusion--
    nonConformitiesDescription,
    improvementSuggestions,
    pendingOrNextActions,
  } = storeRep();

  function save() {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({
        stateOperation,
        brand,
        model,
        ip,
        ns,
        fiscalSeal,
        sealWork,
        cleaningExternal,
        cleaningPrinter,
        cleaningSpoolCompartment,
        installationConditionsEquipmentMounting,
        installationConditionsCableOrganization,
        installationConditionsConduitsAndRaceways,
        installationConditionsExposureToRainSun,
        inspectionDisplay,
        inspectionPrinter,
        inspectionKeyboard,
        inspectionReadersCardAndBiometrics,
        inspectionCutterOrPerforator,
        frontAndRear,
        hrInterviewEquipmentFunctioning,
        hrInterviewSoftwareQuestions,
        nonConformitiesDescription,
        improvementSuggestions,
        pendingOrNextActions,
      }),
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Preventiva REP" />
        <StatusAndData />
        <CleaningActions />
        <InspectionOfEssentialResources />
        <InstallationConditions />
        <InterviewWithHR />
        <Conclusion />
        <View>
          <BtnPrimary title="Salvar" onPress={save} />
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
