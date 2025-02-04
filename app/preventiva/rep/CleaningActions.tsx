import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import Input from "@/components/ui/input";
import TitleSectionForm from "@/components/ui/titleSectionForm";

export default function CleaningActions() {
  const [value, setValue] = useState("");
  return (
    <Card>
      <TitleSectionForm title="Ações de limpeza" />
      <Select
        label="Estética e Externa (Silicone):"
        items={["...", "Realizada", "Não Realizada"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Compartimento de bobina:"
        items={["...", "Realizada", "Não Realizada"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Cabeça de impressão:"
        items={["...", "Realizada", "Não Realizada"]}
        value={value}
        setValue={setValue}
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
