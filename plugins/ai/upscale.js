import { remini } from "../../lib/scraper/remini.js"

let handler = async (m, { conn, usedPrefix, command, text }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || q.mtype || ''
	let media = await q.download()
	if (/video/.test(mime)) return m.reply("Maap Video Tidak Support.")
    if (/image/.test(mime)) {
    	m.reply("[!] _Please Wait..._")
    	try {
    		let { base64 } = await remini(text ? text : 'low', media)
    		let buffer = Buffer.from(base64, "base64")
    		conn.sendMsg(m.chat, { document: buffer, fileName: new Date() * 1 + "-hd.jpg", mimetype: "image/jpeg" }, { quoted: m })
    	} catch (e) {
    		console.log(e)
    		throw "Terjadi kesalahan!, Server Error" 
    	}
    } else throw `Kirim/Reply Image with caption ${usedPrefix+command}`
} 
handler.menuai = ["hd", "upscale", "remini"]
handler.tagsai = ["filter"]
handler.command = /^(hd|upscale|remini)$/i

handler.limit = true 
handler.premium = true 

export default handler 