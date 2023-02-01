import{Router, Response, Request} from "express"
import { Configuration, OpenAIApi } from "openai";
const apiRoutes = Router()

//Configuração openAi
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//Rotas
apiRoutes.post('/', async(req:Request, res:Response)=>{
  const {question} = req.body;
  const responseRequest = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${question}`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const response = responseRequest.data.choices[0].text

  res.send({response})
})

apiRoutes.get('/', async(req:Request, res:Response)=>{
  res.send({message:"Hello World"})
})

export {apiRoutes}