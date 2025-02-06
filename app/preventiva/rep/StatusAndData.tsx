import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

interface StatusAndDataProps {
  control: any;
}
export default function StatusAndData({ control }: StatusAndDataProps) {
  return (
    <Card>
      <TitleSectionForm title="Dados e status:" />
      <Controller
        control={control}
        name="stateOperation"
        render={({ field }) => (
          <Select
            label="Funcionamento"
            items={[
              "...",
              "Em pleno funcionamento",
              "Parcial",
              "Desligado ou desativado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="brand"
        render={({ field }) => (
          <Select
            label="Marca do relógio"
            items={["...", "Madis", "Control ID", "Proveu"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="model"
        render={({ field }) => (
          <Input
            label="Modelo"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="ip"
        render={({ field }) => (
          <Input
            label="IP"
            keyboardType="numeric"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="ns"
        render={({ field }) => (
          <Input
            label="Numero de série"
            keyboardType="numeric"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="fiscalSeal"
        render={({ field }) => (
          <Input
            label="Lacre Fiscal"
            keyboardType="numeric"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
