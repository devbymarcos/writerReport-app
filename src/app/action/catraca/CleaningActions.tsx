import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";

export default function CleaningActions({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Ações de limpeza" />
      <Controller
        control={control}
        name="cleaningInternal"
        render={({ field }) => (
          <Select
            label="Gabinete Interno:"
            items={["...", "Realizada", "Não Realizada", "Não aplicavel"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cleaningMainBoard"
        render={({ field }) => (
          <Select
            label="Placa principal:"
            items={["...", "Realizada", "Não Realizada", "Não aplicavel"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cleaningReaders"
        render={({ field }) => (
          <Select
            label="Leitores:"
            items={["...", "Realizada", "Não Realizada", "Não aplicavel"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cleaningSwitch"
        render={({ field }) => (
          <Select
            label="Switch (caso exista)::"
            items={["...", "Realizada", "Não Realizada", "Não aplicavel"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
