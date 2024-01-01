import { pickRandom } from '../../lib/others.js'
import fetch from "node-fetch"

let handler = async (m, { conn }) => {
	try {
		let res = await (await fetch("https://raw.githubusercontent.com/ArifzynXD/database/master/cogan/random.json")).json()
		let anu = pickRandom(res)
		conn.sendFile(m.chat, anu.url, '', "_Random Pic :_ Cogan", m)
	} catch (e) {
		console.log(e)
		m.reply("Terjadi kesalahan...")
	}
}
handler.help = ['cogan']
handler.tags = ['entertainment']
handler.command = /^(cogan)$/i

handler.premium = true
handler.limit = true

export default handler