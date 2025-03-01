import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function CleaningActions({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Ações de limpeza" />
      <Controller
        control={control}
        name="cleaningExternal"
        render={({ field }) => (
          <Select
            label="Estética e Externa (Silicone):"
            items={["Realizada", "Não Realizada"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cleaningPrinter"
        render={({ field }) => (
          <Select
            label="Compartimento de bobina:"
            items={["Realizada", "Não Realizada"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cleaningSpoolCompartment"
        render={({ field }) => (
          <Select
            label="Cabeça de impressão:"
            items={["Realizada", "Não Realizada"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
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
