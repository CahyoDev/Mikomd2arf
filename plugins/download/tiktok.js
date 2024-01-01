import { musically } from "../../lib/scraper/musically.js"

let handler = async (m, { conn, usedPrefix, command, text }) => {
	if (!text) throw `Example: ${usedPrefix + command} https://vt.tiktok.com/ZS81qJD5v/`
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
	m.reply("[!] Prosess Download..")
    try {
    	let res = await musically(text)
    	let txt = `${res.desc}\n\n`
    	  + `*Name*: ${res.name}\n`
    	  + `*Type*: Mp4\n\n`
    	  + `Powerred By ${author}`
        conn.sendFile(m.chat, res.video, 'tiktok.mp4', txt, m)
    } catch (e) {
    	console.log(e)
    	throw `invalid tiktok url / media isn't available.`
    }
}
handler.menudownload = ['tiktok <url>']
handler.tagsdownload = ['search']
handler.command = /^(tiktok|tt)$/i

handler.premium = true
handler.limit = true 

export default handler 