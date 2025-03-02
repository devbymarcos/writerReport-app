import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";

function BatteryVehicle({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Bateria" />
        <Controller
          control={control}
          name="battery"
          render={({ field }) => (
            <Select
              label="Status:"
              items={["Ok", "Bateria fraca", "Realizar troca"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
      </Card>
    </>
  );
}

export default BatteryVehicle;
