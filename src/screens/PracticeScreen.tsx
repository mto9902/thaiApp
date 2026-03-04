import { useState } from "react";
import { Button, Text, View } from "react-native";
import { generateSentence } from "../logic/sentenceGenerator";

export default function PracticeScreen() {
  const [sentence, setSentence] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>{sentence}</Text>

      <Button
        title="Generate Sentence"
        onPress={() => setSentence(generateSentence())}
      />
    </View>
  );
}
