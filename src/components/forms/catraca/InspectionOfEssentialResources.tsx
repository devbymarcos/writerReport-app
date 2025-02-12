import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";

export default function InspectionOfEssentialResources({
  control,
}: {
  control: any;
}) {
  return (
    <Card>
      <TitleSectionForm title="Vistoria de recursos essenciais" />
      <Controller
        control={control}
        name="inspectionDisplay"
        render={({ field }) => (
          <Select
            label="Display:"
            items={[
              "...",
              "Ok",
              "Necessário troca",
              "Corrigido na preventiva",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionKeyboard"
        render={({ field }) => (
          <Select
            label="Teclado:"
            items={[
              "...",
              "Ok",
              "Necessário troca",
              "Corrigido na preventiva",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionReaders"
        render={({ field }) => (
          <Select
            label="Leitores (cartão):"
            items={[
              "...",
              "Ok",
              "Necessário troca",
              "Corrigido na preventiva",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionBody"
        render={({ field }) => (
          <Select
            label="Corpo metalico::"
            items={[
              "...",
              "Ok",
              "Necessário troca",
              "Corrigido na preventiva",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
