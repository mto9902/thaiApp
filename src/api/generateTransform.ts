export async function generateTransform(prompt: string) {
  const response = await fetch("http://192.168.1.121:3000/transform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error("Transform generation failed");
  }

  return response.json();
}
