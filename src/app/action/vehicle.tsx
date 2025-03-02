import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import Input from "@/components/ui/input";
import Card from "@/components/ui/card";
import { registerVehicle } from "@/service/registerVehicle";
import { Controller, useForm } from "react-hook-form";
import { getAllVehicle } from "@/service/getAllVehicle";
import { toast } from "sonner-native";
import { deleteVehicle as deleteVehicleService } from "@/service/deleteVehicle";
import MessageInputValidation from "@/components/forms/MessageInputValidation";
import { Trash } from "lucide-react-native";

interface Vehicle {
  id: number;
  vehicle: string;
  created_at: string;
}

// Componente memorizado para o item da lista
const VehicleItem = React.memo(
  ({ item, onDelete }: { item: Vehicle; onDelete: (id: number) => void }) => (
    <View style={styles.vehicleItem}>
      <Text style={styles.vehicleText}>{item.vehicle}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Trash color={Colors.colorIconsDark} />
      </TouchableOpacity>
    </View>
  )
);

export default function VehiclesSettings() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const fetchVehicles = useCallback(async () => {
    const data = await getAllVehicle();
    setVehicles(data as Vehicle[]);
  }, []);

  const handleAddVehicle = async (data: any) => {
    try {
      const response = await registerVehicle(data);
      if (response?.lastInsertRowId ?? 0 > 0) {
        toast.success("Veículo cadastrado com sucesso!");
        reset(); // Limpa o formulário
        fetchVehicles(); // Atualiza a lista
      }
    } catch (error) {
      toast.error("Erro ao cadastrar veículo");
    }
  };

  const handleDeleteVehicle = useCallback(async (id: number) => {
    try {
      await deleteVehicleService({ id });
      toast.success("Veículo removido com sucesso!");
      fetchVehicles(); // Atualiza a lista
    } catch (error) {
      toast.error("Erro ao remover veículo");
    }
  }, []);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const renderItem = useCallback(
    ({ item }: { item: Vehicle }) => (
      <VehicleItem item={item} onDelete={handleDeleteVehicle} />
    ),
    [handleDeleteVehicle]
  );

  return (
    <View style={styles.container}>
      <TitleForm title="Cadastro de Veículos" />

      <Card>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="vehicle"
            rules={{ required: "Nome e placa é obrigatório" }}
            render={({ field }) => (
              <>
                <Input
                  label="Nome e placa"
                  keyboardType="default"
                  value={field.value}
                  onChangeText={field.onChange}
                />
                <MessageInputValidation error={errors} name="vehicle" />
              </>
            )}
          />
          <BtnPrimary
            title="Adicionar"
            onPress={handleSubmit(handleAddVehicle)}
          />
        </View>
      </Card>

      <Card>
        <Text style={styles.listTitle}>Veículos Cadastrados</Text>
        <FlatList
          data={vehicles}
          renderItem={renderItem}
          keyExtractor={useCallback((item: any) => item.id.toString(), [])}
          ItemSeparatorComponent={useCallback(
            () => (
              <View style={styles.separator} />
            ),
            []
          )}
          contentContainerStyle={styles.listContainer}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
    padding: 10,
    paddingBottom: 150,
  },
  inputContainer: {
    gap: 10,
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.text,
  },
  vehicleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  vehicleText: {
    fontSize: 16,
    color: Colors.text,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.bgPrimary,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  removeButton: {
    backgroundColor: "red",
  },
});
