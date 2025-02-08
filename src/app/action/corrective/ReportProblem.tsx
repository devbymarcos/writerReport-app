import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function ReportProblem({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Sobre o Defeito" />
      <Controller
        control={control}
        name="reportedProblemOrIdentifiedProblem"
        render={({ field }) => (
          <InputMultiplo
            label="O defeito reclamado foi confirmado ou outro problema foi identificado?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
