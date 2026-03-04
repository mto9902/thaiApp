import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import GenerateButton from "../../src/components/GenerateButton";
import Header from "../../src/components/Header";
import StatsCard from "../../src/components/StatsCard";
import TranslateCard from "../../src/components/TranslateCard";
import WordCard from "../../src/components/WordCard";

import { generateSentence } from "../../src/api/generateSentence";
import { grammarPoints } from "../../src/data/grammar";
import { vocabulary } from "../../src/data/words";

const COLORS = ["#42A5F5", "#FF4081", "#66BB6A", "#FF9800", "#AB47BC"];

export default function Index() {
  const [sentence, setSentence] = useState("");
  const [romanization, setRomanization] = useState("");
  const [words, setWords] = useState<any[]>([]);

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
      const randomWords = getRandomWords(3);
      const grammar = getRandomGrammar();

      const result = await generateSentence(randomWords, grammar);

      setSentence(result.sentence);
      setRomanization(result.romanization);

      // convert AI breakdown → WordCard format
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
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />

        <TranslateCard thai={sentence} romanization={romanization} />

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

        <StatsCard streak={12} />

        <GenerateButton onPress={handleGenerate} />
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
});
