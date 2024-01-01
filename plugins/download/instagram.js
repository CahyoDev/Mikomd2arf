import { igdl } from "../../lib/scraper/igdl.js"

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply(`*Usage : ${usedPrefix + command} url*\n\nExample :\n${usedPrefix + command} https://www.instagram.com/reel/CuPXt_aPn_0/?igshid=MzRlODBiNWFlZA==`)
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('instagram.com')) return m.reply(`Invalid Instagram URL.`)
	m.reply("[!] Process Download...")
	let txt = 'Downloader igtv, post, video, reel, etc'
	try {
		let res = await igdl(text)
		if (res.length == 0) throw Error('No media.')
		for (let x of res.media) {
			conn.sendFile(m.chat, x, "igdl.mp4", txt, m)
			await delay(1000)
		}
	} catch (e) {
		console.log(e)
		throw 'invalid url / server down'
	}
}

handler.menudownload = ['igdl <url>']
handler.tagsdownload = ['search']
handler.command = /^(instagram(dl)?|ig(dl)?)$/i

handler.premium = true
handler.limit = true

export default handler


const delay = time => new Promise(res => setTimeout(res, time))