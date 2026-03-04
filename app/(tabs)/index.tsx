import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../src/components/Header";
import TranslateCard from "../../src/components/TranslateCard";
import WordCard from "../../src/components/WordCard";
import StatsCard from "../../src/components/StatsCard";
import GenerateButton from "../../src/components/GenerateButton";

// Mock data to match screenshot
const INITIAL_WORDS = [
  { thai: "ครู", english: "TEACHER", color: "#42A5F5", rotation: -2 },
  { thai: "วันนี้", english: "TODAY", color: "#FF4081", rotation: 2 },
  { thai: "มา", english: "COME", color: "#66BB6A", rotation: -1 },
  { thai: "ไหม", english: "QUESTION?", color: "#FF9800", rotation: 3 },
  { thai: "เขา", english: "HE/SHE", color: "#AB47BC", rotation: -3 },
];

export default function Index() {
  const [sentence, setSentence] = useState("ครูเขามาวันนี้ไหม");
  const [romanization, setRomanization] = useState("Kru-kao-ma-wan-nee-mai?");
  const [words, setWords] = useState(INITIAL_WORDS);

  const handleGenerate = () => {
    // In a real app, we would call the API here
    // For now, let's keep the mock data from the image
    console.log("Generating next sentence...");
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
    backgroundColor: '#F5F5F5', // Light grey background
  },
  container: {
    paddingBottom: 40,
  },
  wordScrapsSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  wordScrapsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  wordScrapsTitle: {
    fontSize: 22,
    fontWeight: '900',
    marginLeft: 10,
    letterSpacing: 1,
  },
  wordCardsGrid: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
