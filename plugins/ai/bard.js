import Bard from "bard-ai"

const handler = async (m, { conn, text }) => {
	if (!text) throw "Yes, can I help you ?"
	try {
		const myBard = new Bard(api.cookie)
		const message = await myBard.ask(text)
		m.reply(message)
	} catch (e) {
		console.log(e)
		throw "Error response Bard Ai"
	}
}
handler.menuai = ["bard"]
handler.tagsai = ["openai"]
handler.command = /^(bard)$/i

handler.limit = true 

export default handler 