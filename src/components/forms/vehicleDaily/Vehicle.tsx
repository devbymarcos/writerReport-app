import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Card from "@/components/ui/card";

const configVehicles = [
  "...",
  "UNO JJ6789",
  "CELTA JJ6789",
  "PALIO JJ6789",
  "SANDERO JJ6789",
  "FIORINO JJ6789",
  "DUSTER JJ6789",
  "DUSTER JJ6789",
  "DUSTER JJ6789",
];

export default function Vehicle({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Dados do veiculo" />
      <Controller
        control={control}
        name="vehicle"
        render={({ field }) => (
          <Select
            label="Modelo e placa:"
            items={configVehicles}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
