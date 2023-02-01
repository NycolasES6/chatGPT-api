import express from "express";
import { Configuration, OpenAIApi } from "openai";

const app = express()

app.listen(3003, ()=> console.log("Servidor rodando na porta 3003"))

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function service() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "// quais são os melhores frameworks csss ?",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.data.choices[0].text);
}
service();
