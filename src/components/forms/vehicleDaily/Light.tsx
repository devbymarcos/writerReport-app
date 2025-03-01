import React from "react";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Card from "@/components/ui/card";

export default function Light({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Luzes" />
      <Controller
        control={control}
        name="frontBlinker"
        render={({ field }) => (
          <Select
            label="Pisca Dianteiro:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="rearBlinker"
        render={({ field }) => (
          <Select
            label="Pisca Traseiro:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="brakeLight"
        render={({ field }) => (
          <Select
            label="Luz de Freio:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="reverseLight"
        render={({ field }) => (
          <Select
            label="Luz de ré:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="headLight"
        render={({ field }) => (
          <Select
            label="Farol:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="frontHalfLight"
        render={({ field }) => (
          <Select
            label="Meia Luz dianteira:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="rearHalfLight"
        render={({ field }) => (
          <Select
            label="Meia Luz traseira:"
            items={["Ok", "Corrigida", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
