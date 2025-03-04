import { View, StyleSheet, Text, FlatList } from "react-native";
import { dataMenu } from "@/shared/dataMenu";
import { Colors } from "@/constants/Colors";
import React, { useCallback } from "react";
import { Link } from "expo-router";
import { Settings } from "lucide-react-native";

export default function Home() {
  const renderItem = useCallback(
    ({ item }: { item: { path: string; title: string } }) => (
      <Link style={styles.card} href={item.path as any}>
        <View style={styles.cardContent}>
          <Settings color={Colors.colorIconsDark} size={32} />
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      </Link>
    ),
    []
  );

  const keyExtractor = useCallback((item: { path: string }) => item.path, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.titleApp}>Write Report</Text>
        <Text style={styles.subTitleApp}></Text>
      </View>
      <FlatList
        key="grid"
        data={dataMenu}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  listContainer: {
    padding: 20,
    paddingTop: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 20,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.7)",
    textAlign: "center",
  },
  boxTitle: {
    marginBottom: 10,
    alignItems: "center",
    marginTop: 50,
    zIndex: 1,
  },
  titleApp: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitleApp: {
    fontSize: 11,
  },
});
