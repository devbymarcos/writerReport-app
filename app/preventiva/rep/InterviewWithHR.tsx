import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { useState } from "react";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";

export default function InterviewWithHR() {
  const [value, setValue] = useState("...");
  return (
    <Card>
      <TitleSectionForm title="Condições de Instalação:" />
      <Select
        label="Funcionamento do equipamento"
        items={["...", "Sem dúvidas", "Abrir Ticket", "Não perguntado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Dúvidas no software"
        items={[
          "...",
          "Sem dúvidas",
          "Resolvido na preventiva",
          "Abrir Ticket",
          "Não perguntado",
        ]}
        value={value}
        setValue={setValue}
      />
    </Card>
  );
}
