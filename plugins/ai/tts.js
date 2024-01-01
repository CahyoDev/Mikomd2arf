import { speech } from "../../lib/scraper/speech.js"

const handler = async (m, { conn, usedPrefix, text, command, args }) => {
	const { data: chara } = await axios.get("https://raw.githubusercontent.com/ArifzynXD/database/master/ai/voice.json")
	const list = Object.keys(chara)
	var listChara = "*List Character* :\n\n"
	list.forEach((a, b) => {
		listChara += `${b}. ${a}\n`
	})
    if (/character/.test(text)) return m.reply(listChara)
	if (!args[0]) throw `[!] Input Character Name !\n\n*Example :*\n${usedPrefix+command} <character> <text>\n${usedPrefix+command} aoi kiniciwa\n\n*Get List Character :*\n${usedPrefix+command} character`
	if (!args[1]) throw `[!] Input Text`
	if (!chara[args[0]]) return m.reply(`[!] Character *${args[0]}* Not Found!!\n\n${listChara}`)
	const res = await speech(text.replace(args[0], ''), args[0]) 
	if (res.err) throw m.reply("There was an error creating audio")
	await conn.sendFile(m.chat, res, '', '', m)
} 
handler.menuai = ["speech"]  
handler.tagsai = ["openai"]
handler.command = /^(speech)$/i
 
export default handler 