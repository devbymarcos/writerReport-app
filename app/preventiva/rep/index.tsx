import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import StatusAndData from "./StatusAndData";
import CleaningActions from "./CleaningActions";
import InspectionOfEssentialResources from "./InspectionOfEssentialResources";

export default function Rep() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Preventiva Relogio Ponto</Text>
        <StatusAndData />
        <CleaningActions />
        <InspectionOfEssentialResources />
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
