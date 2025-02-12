import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function ExternalInspection({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Inspeção ( Verificação externa )" />
      <Controller
        control={control}
        name="inspectionBarrierCablesAndConnections"
        render={({ field }) => (
          <Select
            label="Cancela (cabos e conexões)"
            items={[
              "...",
              "Ok",
              "Reaperto ou fixação realizada",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionCamerasAndConnections"
        render={({ field }) => (
          <Select
            label="Câmera (cabos e conexões fixação quando necessário)"
            items={[
              "...",
              "Ok",
              "Posicionamento ou fixação realizada",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionInductiveLoopsAndConenctions"
        render={({ field }) => (
          <Select
            label="Laços Indutivos (cabos e conexões fixação quando necessário)"
            items={[
              "...",
              "Ok",
              "Reaperto ou fixação realizada",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionAutomationSensorsAndConnections"
        render={({ field }) => (
          <Select
            label="Sensores de automação (cabos e conexões fixação quando
                  necessário)"
            items={[
              "...",
              "Ok",
              "Reaperto ou fixação realizada",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionPedestalsTightening"
        render={({ field }) => (
          <Select
            label="Pedestais (Reaperto quando necessário)"
            items={[
              "...",
              "Ok",
              "Reaperto ou fixação realizada",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="inspectionArmsAndFixingPosts"
        render={({ field }) => (
          <Select
            label="Braços e postes de fixação (Reaperto quando necessário)"
            items={[
              "...",
              "Ok",
              "Reaperto ou fixação realizada",
              "Abrir ticket Correção",
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
