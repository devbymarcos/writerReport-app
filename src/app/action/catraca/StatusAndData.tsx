import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";
import Input from "@/components/ui/input";

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
        items={["...", "Madis", "Control ID"]}
        value={value}
        setValue={setValue}
      />
      <Input label="Modelo" />
      <Input label="IP" keyboardType="numeric" />
      <Input label="Mascara" keyboardType="numeric" />
      <Input label="Gateway" keyboardType="numeric" />
      <Input label="lacreWork" keyboardType="numeric" />
    </Card>
  );
}

const styles = StyleSheet.create({});
