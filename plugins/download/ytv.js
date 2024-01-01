import fetch from 'node-fetch'
import { youtubedl } from '@bochilteam/scraper-sosmed'
import { somematch } from '../../lib/others.js'
import { allDownloader } from "../../lib/scraper/allDownloader.js"

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!(args[0] || '').match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`Invalid Youtube URL.`)
	try {
		let anu = await youtubedl(args[0])
		let list = Object.keys(anu.video).toString()
		let data = anu.video[`${list.includes('36') ? '360p' : list.includes('24') ? '240p' : '144p'}`]
		let url = await data.download()
		if (data.fileSize > 400000) return m.reply(`Filesize: ${data.fileSizeH}\nTidak dapat mengirim, maksimal file 400 MB`)
		let txt = `*${anu.title}*\n\n`
		txt += `⭔ Watch : ${args[0]}\n`
		txt += `⭔ Resolution : ${data.quality}\n`
		txt += `⭔ Size : ${data.fileSizeH}`
		await conn.sendMsg(m.chat, { video: { url: url }, caption: txt }, { quoted: m })
	} catch (e) {
		console.log(e)
		try {
			let res = await allDownloader(args[0])
			let anu = res.medias.filter(v => v.extension == "mp4")
			anu = anu[0]
			let vsize = anu.size.slice(-2)
			if (vsize == 'GB') return m.reply(`Ngotak dong.\nMana bisa ngirim video ${anu.size}`)
			if (!somematch(['kB','KB'], vsize) && parseInt(anu.size) > 400) return m.reply(`Filesize: ${anu.size}\nTidak dapat mengirim, maksimal file 400 MB`)
			let txt = `*${res.title}*\n\n`
			txt += `⭔ Username : ${res.duration}\n`
			txt += `⭔ Quality : ${anu.quality}\n`
			txt += `⭔ Size : ${anu.size}`
			await conn.sendMsg(m.chat, { video: { url: anu.url }, caption: txt }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`Invalid Youtube URL / terjadi kesalahan.`)
		}
	}
}

handler.menudownload = ['ytvideo <url>']
handler.tagsdownload = ['search']
handler.command = /^(yt(v(ideo)?|mp4))$/i

handler.premium = true
handler.limit = true

export default handler