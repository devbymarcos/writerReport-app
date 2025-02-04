import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";

export default function StatusAndData() {
  const [value, setValue] = useState("...");

  return (
    <Card>
      <TitleSectionForm title="Dados e status:" />
      <Select
        label="Funcionamento"
        items={[
          "...",
          "Em pleno funcionamento",
          "Parcial",
          "Desligado ou desativado",
        ]}
        value={value}
        setValue={setValue}
      />
      <Select
        label="Marca do relógio"
        items={["...", "Madis", "Control ID", "Proveu"]}
        value={value}
        setValue={setValue}
      />
      <Input label="Modelo" />
      <Input label="IP" keyboardType="numeric" />
      <Input label="Numero de série" keyboardType="numeric" />
      <Input label="Lacre Fiscal" keyboardType="numeric" />
    </Card>
  );
}

const styles = StyleSheet.create({});
