import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Card from "@/components/ui/card";
import { getAllVehicle } from "@/service/getAllVehicle";

interface Vehicle {
  id: number;
  vehicle: string;
}

export default function Vehicle({ control }: { control: any }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const fetchVehicles = async () => {
    const response = await getAllVehicle();
    setVehicles(response as Vehicle[]); // Armazena array de objetos completo
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <Card>
      <TitleSectionForm title="Dados do veiculo" />
      <Controller
        control={control}
        name="vehicle"
        render={({ field }) => (
          <Select
            label="Modelo e placa:"
            items={vehicles.map((v) => v.vehicle)}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
