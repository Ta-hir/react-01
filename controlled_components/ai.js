import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assintant that recieves a list of ingridients that a user has and suggets a reciepe they cpuld amke with some or all of those ingridients. You don't need to use every ingridient they mention in your reciepe. The reciepe can include additional ingridients they didn't mention, but try not includ too many extra ingridients. Format your response in markdown to make it easier to render to a web page`;

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getReciepeFromMIstral(ingridientsArr) {
  const ingridientsString = ingridientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingridientsString}. Please give me a reciepe you'd recommend I make! `,
        },
      ],
      max_teken: 1024,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.log(error.message);
  }
}
