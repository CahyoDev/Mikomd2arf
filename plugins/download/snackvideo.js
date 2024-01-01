import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} smule_url_media*\n\nExample :\n${usedPrefix + command} https://sck.io/p/jiv-dwZX`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		m.reply("[!] Prosess Download...")
		let anu = await snackVideo(text)
		await conn.sendMsg(m.chat, { video: { url: anu.url }, caption: anu.caption }, { quoted : m })
	} catch (e) {
		console.log(e)
		throw 'invalid url / server down'
	}  
}

handler.menudownload = ['snackvideo <url>']
handler.tagsdownload = ['search']
handler.command = /^(snackvideo)$/i

handler.premium = true
handler.limit = true

export default handler

const snackVideo = async (url) => {
  return new Promise(async (resolve, reject) => {
    await axios.post('https://api.teknogram.id/v1/snackvideo', {
      url: url
    })
    .then(({ data }) => {
      resolve(data)
    })
    .catch(reject)
  })
}