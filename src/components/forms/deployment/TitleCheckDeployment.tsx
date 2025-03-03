import { StyleSheet } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

interface TitleCheckProps {
  control: any;
}
export default function TitleCheckDeployment({ control }: TitleCheckProps) {
  return (
    <Card>
      <TitleSectionForm title="Titulo:" />
      <Controller
        control={control}
        name="titleCheck"
        render={({ field }) => (
          <Input
            label="Identificação da tarefa"
            keyboardType="default"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
