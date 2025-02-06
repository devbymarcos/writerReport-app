import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ButtonLink } from "@/components/ui/btnLink";
import { useLocalSearchParams } from "expo-router";

interface MenuItem {
  title: string;
  path: string;
}

const dataMenuPreventive: MenuItem[] = [
  {
    title: "Relogio Ponto",
    path: "/preventiva/rep",
  },
  {
    title: "Catraca",
    path: "/catraca",
  },
  {
    title: "Orc",
    path: "/ocr",
  },
  {
    title: "Portas",
    path: "/doors",
  },
];

export default function SubMenuModalPreventive() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a Tarefa </Text>
      {dataMenuPreventive.map((item, index) => (
        <View key={index} style={styles.boxButton}>
          <ButtonLink
            href={`${item.path}?id=${id}`}
            title={item.title}
            backgroundColor="#0000"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  boxButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
