import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import GenerateButton from "../../src/components/GenerateButton";
import Header from "../../src/components/Header";
import TranslateCard from "../../src/components/TranslateCard";
import WordCard from "../../src/components/WordCard";

import { generateSentence } from "../../src/api/generateSentence";
import { grammarPoints } from "../../src/data/grammar";
import { vocabulary } from "../../src/data/words";

const COLORS = ["#42A5F5", "#FF4081", "#66BB6A", "#FF9800", "#AB47BC"];

export default function Index() {
  const [sentence, setSentence] = useState("");
  const [romanization, setRomanization] = useState("");
  const [translation, setTranslation] = useState("");
  const [grammarPoint, setGrammarPoint] = useState("");
  const [words, setWords] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGenerate();
  }, []);

  function getRandomWords(count = 3) {
    const selected: string[] = [];

    for (let i = 0; i < count; i++) {
      const word = vocabulary[Math.floor(Math.random() * vocabulary.length)];
      selected.push(word);
    }

    return selected;
  }

  function getRandomGrammar() {
    return grammarPoints[Math.floor(Math.random() * grammarPoints.length)];
  }

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const randomWords = getRandomWords(3);
      const grammar = getRandomGrammar();
      setGrammarPoint(grammar);

      const result = await generateSentence(randomWords, grammar);

      setSentence(result.sentence);
      setRomanization(result.romanization);

      setTranslation(
        result.translation ||
          (result.breakdown || []).map((w: any) => w.english).join(" "),
      );

      const formattedWords = (result.breakdown || []).map(
        (w: any, i: number) => ({
          thai: w.thai,
          english: w.english.toUpperCase(),
          color: COLORS[i % COLORS.length],
          rotation: Math.random() * 6 - 3,
        }),
      );

      setWords(formattedWords);
    } catch (error) {
      console.error("Generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />

        {loading ? (
          <View style={styles.loadingContainer}>
            <View style={styles.spinnerOutline}>
              <ActivityIndicator size="large" color="#efff09" />
            </View>

            <Text style={styles.loadingText}>Building a sentence…</Text>
          </View>
        ) : (
          <>
            <TranslateCard
              thai={sentence}
              romanization={romanization}
              english={translation}
              grammarPoint={grammarPoint}
            />

            <View style={styles.wordScrapsSection}>
              <View style={styles.wordScrapsHeader}>
                <Ionicons name="cut-outline" size={24} color="black" />
                <Text style={styles.wordScrapsTitle}>WORDSCRAPS</Text>
              </View>

              <View style={styles.wordCardsGrid}>
                <View style={styles.row}>
                  {words.slice(0, 4).map((word, idx) => (
                    <WordCard
                      key={idx}
                      thai={word.thai}
                      english={word.english}
                      backgroundColor={word.color}
                      rotation={word.rotation}
                    />
                  ))}
                </View>

                <View style={styles.row}>
                  {words.slice(4).map((word, idx) => (
                    <WordCard
                      key={idx}
                      thai={word.thai}
                      english={word.english}
                      backgroundColor={word.color}
                      rotation={word.rotation}
                    />
                  ))}
                </View>
              </View>
            </View>

            <GenerateButton onPress={handleGenerate} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  container: {
    paddingBottom: 40,
  },

  wordScrapsSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  wordScrapsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  wordScrapsTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginLeft: 10,
    letterSpacing: 1,
  },

  wordCardsGrid: {
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },

  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },

  loadingText: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    letterSpacing: 0.3,
  },

  spinnerOutline: {
    width: 30,
    height: 30,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#797979",

    alignItems: "center",
    justifyContent: "center",
  },
});
