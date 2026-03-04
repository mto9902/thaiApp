import { useRouter } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { grammarPoints } from "../../src/data/grammar";

export default function GrammarList() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/")}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grammar</Text>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        data={grammarPoints}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/grammar/[id]",
                params: { id: item.id },
              })
            }
          >
            <View style={styles.cardHeader}>
              <Text style={styles.grammar}>{item.title}</Text>
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>L{item.level}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ADB5BD" />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },

  backButton: {
    padding: 8,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "900",
  },

  listContent: {
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  cardHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  grammar: {
    fontSize: 18,
    fontWeight: "700",
    color: "#212529",
  },

  levelBadge: {
    backgroundColor: "#E7F1FF",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },

  levelText: {
    color: "#007AFF",
    fontSize: 12,
    fontWeight: "800",
  },
});
