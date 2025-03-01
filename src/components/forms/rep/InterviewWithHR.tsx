import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function InterviewWithHR({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Condições de Instalação:" />
      <Controller
        control={control}
        name="hrInterviewEquipmentFunctioning"
        render={({ field }) => (
          <Select
            label="Funcionamento do equipamento"
            items={["Sem dúvidas", "Abrir Ticket", "Não perguntado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="hrInterviewSoftwareQuestions"
        render={({ field }) => (
          <Select
            label="Dúvidas no software"
            items={[
              "...",
              "Sem dúvidas",
              "Resolvido na preventiva",
              "Abrir Ticket",
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
