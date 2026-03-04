import { useState } from "react";
import { Button, Text, View } from "react-native";
import { generateSentence } from "../../src/api/generateSentence";
import { grammarPoints } from "../../src/data/grammar";
import { vocabulary } from "../../src/data/words";

export default function Index() {
  const [sentence, setSentence] = useState("");
  const [romanization, setRomanization] = useState("");
  const [translation, setTranslation] = useState("");
  const [breakdown, setBreakdown] = useState<any[]>([]);

  const [grammar, setGrammar] = useState("");
  const [words, setWords] = useState<string[]>([]);

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

  async function handleGenerate() {
    const randomWords = getRandomWords(3);
    const grammarRule = getRandomGrammar();

    setWords(randomWords);
    setGrammar(grammarRule);

    const result = await generateSentence(randomWords, grammarRule);

    console.log(result);

    setSentence(result.sentence);
    setRomanization(result.romanization);
    setTranslation(result.translation);
    setBreakdown(result.breakdown);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Words: {words.join(", ")}
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>Grammar: {grammar}</Text>

      <Text style={{ fontSize: 28, marginBottom: 10 }}>{sentence}</Text>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>{romanization}</Text>

      <Text style={{ fontSize: 18, marginBottom: 20 }}>{translation}</Text>

      {breakdown.map((item, index) => (
        <Text key={index}>
          {item.thai} → {item.english}
        </Text>
      ))}

      <Button title="Generate Sentence" onPress={handleGenerate} />
    </View>
  );
}
