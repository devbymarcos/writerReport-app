import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";

import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

function Tires({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Pneus:" />
        <Controller
          control={control}
          name="pressure"
          render={({ field }) => (
            <Select
              label="Pressão:"
              items={["Ok", "Correção necessária", "corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="wear"
          render={({ field }) => (
            <Select
              label="Desgaste:"
              items={["Bom para uso", "Agendar Troca", "Troca urgente"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
      </Card>
    </>
  );
}

export default Tires;
