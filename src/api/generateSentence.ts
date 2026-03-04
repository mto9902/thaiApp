export async function generateSentence(words: string[], grammar: string) {
  const res = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      words,
      grammar,
    }),
  });

  const data = await res.json();

  return data;
}
