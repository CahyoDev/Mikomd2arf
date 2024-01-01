import { isValidUrl } from '../../lib/others.js'
import { Spotify } from "../../lib/scraper/spotify.js"

const spotify = new Spotify("83436f23571e4c5d9ed261580c0cd5b2", "5a40a40760d447fe99dc3a2b91c00e0d")

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `[!] Input Query / URL\n\n*Example :*\n_*Search:*_ ${usedPrefix + command} _Melukis Senja_\n_*Download:*_ ${usedPrefix + command} _https://open.spotify.com/track/7FbrGaHYVDmfr7KoLIZnQ7_`
	if (isValidUrl(text)) {  
		try {
			m.reply("[!] Prosess Download...")
			let anu = await spotify.download(text);
			 anu = anu.data 
			let txt = `*${anu.name}*\n\n`
			txt += `*artist :* _${anu.artists.join(" ")}_\n`
			txt += `*album :* _${anu.album_name}_\n`
			txt += `*release :* _${anu.release_date}_` 
			await conn.sendMsg(m.chat, { image: { url: anu.cover_url }, caption: txt }, { quoted : m })
			await conn.sendMsg(m.chat, { audio: anu.mp3, mimetype: "audio/mp4" }, { quoted: m })
		} catch (e) {
			console.log(e)
			throw 'invalid url / server down.'
		}
	} else {
		let res = await spotify.search(text)
		let txt = `Found : *${text}*`
		for (var x of res.data) {
			txt += `\n\n*Title : ${x.title}*\n`
			txt += `Duration : ${x.duration}\n`
			txt += `Link : ${x.url}\n`
			txt += `${x.preview ? `Preview : ${x.preview}\n` : ''}`
			txt += `───────────────────`
		} 
		m.reply(txt)
	}
}

handler.menudownload = ['spotify <teks>','spotifydl <url>']
handler.tagsdownload = ['search'] 
handler.command = /^(spotify)$/i

handler.premium = true
handler.limit = true

export default handler