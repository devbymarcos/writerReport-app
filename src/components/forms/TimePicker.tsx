import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller } from "react-hook-form";
import Input from "@/components/ui/input";
import { Clock } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

interface TimePeckerProps {
  control: any;
  setValue: any;
  label: string;
  name: string;
}

export default function TimePicker({
  control,
  setValue,
  label,
  name,
}: TimePeckerProps) {
  const [show, setShow] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={field.value ? new Date(field.value) : new Date()}
              mode="time"
              locale="pt-Br"
              is24Hour={true}
              onChange={(_, selectedDate) => {
                setShow(false);
                if (selectedDate) {
                  setValue(name, selectedDate, {
                    shouldValidate: true,
                  });
                }
              }}
            />
          )}
          <View style={styles.boxTime}>
            <Input
              label={label}
              value={
                field.value
                  ? new Date(field.value).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""
              }
            />
            <TouchableOpacity style={styles.btnIcon} onPress={showDatepicker}>
              <Clock color={Colors.colorIconsLight} size={16} />
            </TouchableOpacity>
          </View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  boxTime: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  btnIcon: {
    padding: 14,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 8,
    marginTop: 10,
  },
});
