import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { storeRep } from "@/store/storeRep";

export default function StatusAndData() {
  const {
    stateOperation,
    setStateOperation,
    brand,
    setBrand,
    model,
    setModel,
    ns,
    setNs,
    fiscalSeal,
    setFiscalSeal,
  } = storeRep();

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
        value={stateOperation}
        setValue={setStateOperation}
      />
      <Select
        label="Marca do relógio"
        items={["...", "Madis", "Control ID", "Proveu"]}
        value={brand}
        setValue={setBrand}
      />
      <Input label="Modelo" value={model} onChangeText={setModel} />

      <Input label="IP" keyboardType="numeric" />
      <Input
        label="Numero de série"
        keyboardType="numeric"
        value={ns}
        onChangeText={setNs}
      />
      <Input
        label="Lacre Fiscal"
        keyboardType="numeric"
        value={fiscalSeal}
        onChangeText={setFiscalSeal}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
