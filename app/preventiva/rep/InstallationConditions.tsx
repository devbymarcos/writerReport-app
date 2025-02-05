import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";

export default function InstallationConditions() {
  const [value, setValue] = useState("...");
  return (
    <Card>
      <TitleSectionForm title="Condições de Instalação:" />
      <Select
        label="Fixação do equipamento"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Organização cabos de rede/energia"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Canaletas e Eletrodutos"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Exposição a Chuva/Sol"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
