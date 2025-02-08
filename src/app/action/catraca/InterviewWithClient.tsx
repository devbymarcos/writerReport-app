import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import { Controller } from "react-hook-form";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";

export default function InterviewWithClient({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Entrevista com Cliente" />
      <Controller
        control={control}
        name="equipmentFixation"
        render={({ field }) => (
          <Select
            label="Funcionamento do equipamento:"
            items={[
              "...",
              "Sem dúvidas",
              "Abrir Ticket",
              "Resolvido na preventiva",
              "Não perguntado",
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
