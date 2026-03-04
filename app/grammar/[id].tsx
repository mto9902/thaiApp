import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { grammarPoints } from "../../src/data/grammar";

export default function GrammarDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const grammar = grammarPoints.find((p) => p.id === id);

  if (!grammar) {
    return (
      <View style={styles.container}>
        <Text>Grammar point not found</Text>
      </View>
    );
  }

  // Fallback data if not provided in the object
  const explanation = grammar.explanation || "No explanation provided yet.";
  const pattern = grammar.pattern || "PATTERN + HERE";
  const example = grammar.example || {
    thai: "ตัวอย่างประโยค",
    roman: "tua-yàang bprà-yòohk",
    english: "Example sentence",
    breakdown: [
      { thai: "ตัวอย่าง", english: "example" },
      { thai: "ประโยค", english: "sentence" },
    ],
  };
  const focus = grammar.focus || {
    particle: "Focus point",
    meaning: "The meaning of the key word.",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/grammar")}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lesson</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{grammar.title}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>LEVEL {grammar.level}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Concept</Text>
          <Text style={styles.explanation}>{explanation}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sentence Pattern</Text>
          <View style={styles.patternCard}>
            <Text style={styles.patternText}>{pattern}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Example</Text>
          <View style={styles.exampleCard}>
            <Text style={styles.thaiText}>{example.thai}</Text>
            <Text style={styles.romanText}>{example.roman}</Text>
            <Text style={styles.englishText}>{example.english}</Text>

            <View style={styles.breakdownContainer}>
              {example.breakdown.map((item, index) => (
                <View key={index} style={styles.breakdownItem}>
                  <Text style={styles.breakdownThai}>{item.thai}</Text>
                  <Text style={styles.breakdownEnglish}>{item.english}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Grammar Focus</Text>
          <View style={styles.focusCard}>
            <Text style={styles.focusParticle}>{focus.particle}</Text>
            <Text style={styles.focusMeaning}>{focus.meaning}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() =>
            router.push({
              pathname: "/",
              params: { grammar: grammar.id },
            })
          }
        >
          <Text style={styles.ctaText}>Start Practice</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 18,
    fontWeight: "700",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  titleSection: {
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#212529",
    marginBottom: 8,
  },
  levelBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "800",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6C757D",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 12,
  },
  explanation: {
    fontSize: 17,
    lineHeight: 24,
    color: "#495057",
  },
  patternCard: {
    backgroundColor: "#E7F1FF",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#CFE2FF",
  },
  patternText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0056B3",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  exampleCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  thaiText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212529",
    marginBottom: 4,
  },
  romanText: {
    fontSize: 16,
    color: "#6C757D",
    fontStyle: "italic",
    marginBottom: 10,
  },
  englishText: {
    fontSize: 18,
    color: "#495057",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F3F5",
    paddingBottom: 15,
  },
  breakdownContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  breakdownItem: {
    marginBottom: 5,
  },
  breakdownThai: {
    fontSize: 16,
    fontWeight: "700",
    color: "#007AFF",
  },
  breakdownEnglish: {
    fontSize: 14,
    color: "#6C757D",
  },
  focusCard: {
    backgroundColor: "#FFF4E6",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FD7E14",
  },
  focusParticle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#D9480F",
    marginBottom: 4,
  },
  focusMeaning: {
    fontSize: 15,
    color: "#862E08",
  },
  ctaButton: {
    backgroundColor: "#212529",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 10,
    gap: 10,
  },
  ctaText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
