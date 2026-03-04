import { useState } from "react";
import { Button, Text, View, ActivityIndicator } from "react-native";
import { generateSentence } from "../api/generateSentence";
import { getRandomWords } from "../logic/sentenceGenerator";
import { grammarPoints } from "../data/grammar";

export default function PracticeScreen() {
  const [sentence, setSentence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const words = getRandomWords(3);
      const grammar = grammarPoints[0]; // just a default
      const result = await generateSentence(words, grammar);
      setSentence(result.sentence);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Text style={{ fontSize: 28, marginBottom: 20, textAlign: 'center' }}>{sentence || "Generate a sentence to begin"}</Text>
      )}

      <Button
        title="Generate Sentence"
        onPress={handleGenerate}
        disabled={loading}
      />
    </View>
  );
}
