import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { getTicketAndTasks } from "@/service/getTicketAndTasks";

export default function index() {
  const { id } = useLocalSearchParams();

  async function getAlltickets() {
    const data = await getTicketAndTasks(Number(id));
    console.log("view", data);
  }

  useEffect(() => {
    getAlltickets();
  }, []);
  return (
    <View style={styles.container}>
      <Text>index{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
