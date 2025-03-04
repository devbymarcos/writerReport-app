import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Car, Users } from "lucide-react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.gridContainer}>
        <Link href="/settings/vehicle" style={styles.card}>
          <View style={styles.cardContent}>
            <Car color={Colors.colorIconsDark} size={32} />
            <Text style={styles.cardText}>Veículos</Text>
          </View>
        </Link>
        {/* <Link href="/settings/users" style={styles.card}>
          <View style={styles.cardContent}>
            <Users color={Colors.colorIconsDark} size={32} />
            <Text style={styles.cardText}>Usuários</Text>
          </View>
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bgPrimary,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 20,
    width: "47%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: "center",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.colorIconsDark,
    textAlign: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
