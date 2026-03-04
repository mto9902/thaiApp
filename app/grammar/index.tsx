import { useRouter } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { grammarPoints } from "../../src/data/grammar";

export default function GrammarList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar</Text>

      <FlatList
        data={grammarPoints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/",
                params: { grammar: item.id },
              })
            }
          >
            <Text style={styles.grammar}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },

  grammar: {
    fontSize: 20,
    fontWeight: "700",
  },
});
