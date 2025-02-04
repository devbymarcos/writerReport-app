import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";

export default function InspectionOfEssentialResources() {
  const [value, setValue] = useState("...");
  return (
    <Card>
      <TitleSectionForm title="Vistoria de recursos essenciais:" />
      <Select
        label="Display"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Impressor"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Teclado"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Leitores (carão e biometria):"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Guilhotina ou serrilha:"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Caixa fronta/traseira:"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={value}
        setValue={setValue}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
