import { StyleSheet } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function InspectionOfEssentialResources({
  control,
}: {
  control: any;
}) {
  return (
    <Card>
      <TitleSectionForm title="Vistoria de recursos essenciais:" />
      <Controller
        control={control}
        name="inspectionDisplay"
        render={({ field }) => (
          <Select
            label="Display"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionPrinter"
        render={({ field }) => (
          <Select
            label="Impressor"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
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
            label="Teclado"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionReadersCardAndBiometrics"
        render={({ field }) => (
          <Select
            label="Leitores (carão e biometria):"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionCutterOrPerforator"
        render={({ field }) => (
          <Select
            label="Guilhotina ou serrilha:"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="frontAndRear"
        render={({ field }) => (
          <Select
            label="Caixa fronta/traseira:"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
