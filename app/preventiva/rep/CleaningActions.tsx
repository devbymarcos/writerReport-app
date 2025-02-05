import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { storeRep } from "@/store/storeRep";

export default function CleaningActions() {
  const {
    cleaningExternal,
    setCleaningExternal,
    cleaningPrinter,
    setCleaningPrinter,
    cleaningSpoolCompartment,
    setCleaningSpoolCompartment,
  } = storeRep();
  return (
    <Card>
      <TitleSectionForm title="Ações de limpeza" />
      <Select
        label="Estética e Externa (Silicone):"
        items={["...", "Realizada", "Não Realizada"]}
        value={cleaningExternal}
        setValue={setCleaningExternal}
      />
      <Select
        label="Compartimento de bobina:"
        items={["...", "Realizada", "Não Realizada"]}
        value={cleaningPrinter}
        setValue={setCleaningPrinter}
      />
      <Select
        label="Cabeça de impressão:"
        items={["...", "Realizada", "Não Realizada"]}
        value={cleaningSpoolCompartment}
        setValue={setCleaningSpoolCompartment}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
