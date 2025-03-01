import { View } from "react-native";
import { Control } from "react-hook-form";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import Input from "@/components/ui/input";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

interface Props {
  control: Control<any>;
}

export default function StatusAndDataCatraca({ control }: Props) {
  return (
    <Card>
      <TitleSectionForm title="Dados e status" />
      <Controller
        control={control}
        name="stateOperation"
        render={({ field }) => (
          <Select
            label="Estado de Funcionamento"
            items={[
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
            items={["Control ID", "Henry", "Dimep", "Outros"]}
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
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="numeric"
          />
        )}
      />
      <Controller
        control={control}
        name="masc"
        render={({ field }) => (
          <Input
            label="Máscara de rede"
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="numeric"
          />
        )}
      />
      <Controller
        control={control}
        name="gateway"
        render={({ field }) => (
          <Input
            label="Gateway"
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="numeric"
          />
        )}
      />
      <Controller
        control={control}
        name="sealWork"
        render={({ field }) => (
          <Input
            label="Número lacre Work"
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="numeric"
          />
        )}
      />
    </Card>
  );
}
