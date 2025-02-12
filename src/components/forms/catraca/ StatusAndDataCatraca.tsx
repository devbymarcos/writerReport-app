import React from "react";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

interface StatusAndDataCatracaProps {
  control: any;
}
export default function StatusAndDataCatraca({
  control,
}: StatusAndDataCatracaProps) {
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
            label="Marca"
            items={["...", "Madis", "Control ID"]}
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
            keyboardType="default"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="masc"
        render={({ field }) => (
          <Input
            label="Mascara"
            keyboardType="phone-pad"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="gateway"
        render={({ field }) => (
          <Input
            label="Gateway"
            keyboardType="phone-pad"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="sealWork"
        render={({ field }) => (
          <Input
            label="Lacre Work"
            keyboardType="phone-pad"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
