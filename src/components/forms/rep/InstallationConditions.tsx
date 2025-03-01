import { StyleSheet } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function InstallationConditions({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Condições de Instalação:" />
      <Controller
        control={control}
        name="installationConditionsEquipmentMounting"
        render={({ field }) => (
          <Select
            label="Fixação do equipamento"
            items={["Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="installationConditionsCableOrganization"
        render={({ field }) => (
          <Select
            label="Organização cabos de rede/energia"
            items={["Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="installationConditionsConduitsAndRaceways"
        render={({ field }) => (
          <Select
            label="Canaletas e Eletrodutos"
            items={["Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="installationConditionsExposureToRainSun"
        render={({ field }) => (
          <Select
            label="Exposição a Chuva/Sol"
            items={["Ok", "Abrir Ticket", "Corrigido", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
