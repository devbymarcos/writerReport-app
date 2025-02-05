import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import StatusAndData from "./StatusAndData";
import TitleForm from "@/components/ui/titleForm";

export default function Rep() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Preventiva Catraca" />
        <StatusAndData />
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
