import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";
import { storeRep } from "@/store/storeRep";

export default function InstallationConditions() {
  const {
    installationConditionsEquipmentMounting,
    setInstallationConditionsEquipmentMounting,
    installationConditionsCableOrganization,
    setInstallationConditionsCableOrganization,
    installationConditionsConduitsAndRaceways,
    setInstallationConditionsConduitsAndRaceways,
    installationConditionsExposureToRainSun,
    setInstallationConditionsExposureToRainSun,
  } = storeRep();
  return (
    <Card>
      <TitleSectionForm title="Condições de Instalação:" />
      <Select
        label="Fixação do equipamento"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={installationConditionsEquipmentMounting}
        setValue={setInstallationConditionsEquipmentMounting}
      />
      <Select
        label="Organização cabos de rede/energia"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={installationConditionsCableOrganization}
        setValue={setInstallationConditionsCableOrganization}
      />
      <Select
        label="Canaletas e Eletrodutos"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={installationConditionsConduitsAndRaceways}
        setValue={setInstallationConditionsConduitsAndRaceways}
      />
      <Select
        label="Exposição a Chuva/Sol"
        items={["...", "Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
        value={installationConditionsExposureToRainSun}
        setValue={setInstallationConditionsExposureToRainSun}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
