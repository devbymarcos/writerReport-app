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

export default function Rep() {
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
