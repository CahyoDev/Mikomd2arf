import CharacterAI from "node_characterai"
import fetch from "node-fetch"

const characterAI = new CharacterAI();

let handler = async (m, { conn, text }) => {
	if (!text) throw "ya"
	const res = await CAI(text, "Hu Tao")
    m.reply(res)
}
handler.command = ["cai"]

export default handler

const CAI = async (query, chark) => {
  return new Promise(async (resolve, reject) => {
axios("https://boredhumans.com/api_celeb_chat.php", {
  headers: {
    "cookie": "boredHuman=2023-09-20; website-builder=2; adoptme_ck=f10961a8; ai-tools=1; code_generation=3; article-writer=2; text-to-image=1; research-paper=1; haiku=1; template=2",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
     },
  "data": "message=" + query + "&intro=" + chark + "&name=" + chark,
  "method": "POST"
}).then((response) => {
      resolve(response.data.output);
    }).catch((error) => {
      reject(error);
    });
  });
};