"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
const express_1 = require("express");
const openai_1 = require("openai");
const apiRoutes = (0, express_1.Router)();
exports.apiRoutes = apiRoutes;
//Configuração openAi
const configuration = new openai_1.Configuration({
    apiKey: "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",
});
const openai = new openai_1.OpenAIApi(configuration);
//Rotas
apiRoutes.post('/', async (req, res) => {
    const { question } = req.body;
    const responseRequest = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${question}`,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    const response = responseRequest.data.choices[0].text;
    res.send({ response });
});
apiRoutes.get('/', async (req, res) => {
    res.send({ message: "Hello World" });
});
