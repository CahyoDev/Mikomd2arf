import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	if (!text) return m.reply(`*Usage : ${usedPrefix + command} url*\n\nExample :\n${usedPrefix + command} https://www.capcut.com/template-detail/7270686022374149378?template_id=7270686022374149378&share_token=178af2cb-8e25-404f-8532-2b9fa02d1fa3&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`)
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('capcut.com')) return m.reply(`Invalid Instagram URL.`)
	m.reply("[!] Process Download...")
	try {
		let res = await capcut(text)
		let teks = `${res.title}\n\n*Size :* ${res.size}\n*Type :* Video\n\n© SkyBot - Arifzyn`
		conn.sendMsg(m.chat, { video: { url: res.url }, caption: teks }, { quoted: m })
	} catch (e) {
		console.log(e)
		throw "Server Error \ Invalid URL"
	}
}
handler.menudownload = ["capcut <url>"]
handler.tagsdownload = ["search"]
handler.command = /^capcut$/i

handler.limit = true
handler.premium = true
  
export default handler 

const capcut = async (url) => {
	return new Promise(async (resolve, reject) => {
		await axios.post("https://api.teknogram.id/v1/capcut", {
			url: url
		})
		.then(( response ) => {
			resolve(response.data)
		})
		.catch((error) => {
			reject(error)
		})
	})
}