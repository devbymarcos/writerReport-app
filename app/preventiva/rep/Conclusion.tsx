import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputMultiplo from "@/components/ui/inputMultiplo";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { storeRep } from "@/store/storeRep";

export default function Conclusion() {
  const {
    setNonConformitiesDescription,
    setImprovementSuggestions,
    setPendingOrNextActions,
  } = storeRep();
  return (
    <Card>
      <TitleSectionForm title="Conclusão:(use 'ENTER' para quebra de linha) " />
      <InputMultiplo
        onChangeText={setNonConformitiesDescription}
        label="Descreva as não conformidades "
      />
      <InputMultiplo
        onChangeText={setImprovementSuggestions}
        label="Sugestões de melhorias "
      />
      <InputMultiplo
        onChangeText={setPendingOrNextActions}
        label="Pendencias ou próximas etapas "
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
