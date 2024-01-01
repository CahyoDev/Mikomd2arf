import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from "cheerio"

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} likee_url_video*\n\nExample :\n${usedPrefix + command} https://likee.video/@vicky_marpaung/video/7006676628722311449`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await likeDown(`${text}`)
		let txt = `${anu.title}`
		await conn.sendMsg(m.chat, { video: { url: anu.nowm }, caption: anu.title }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Invalid likee url.`)
	}
}

handler.menudownload = ['likee <url>']
handler.tagsdownload = ['search']
handler.command = /^(likee?)$/i

handler.premium = true
handler.limit = true

export default handler

const likeDown = async (url) => {
	const { data } = await axios.post("https://likeedownloader.com/process", {
		id: url,
		locale: "en"
  })
  const $ = cheerio.load(data.template)
  return {
    title: $('p.infotext').eq(0).text().trim(),
    thumbnail: $('.img_thumb img').attr('src'),
    wm: $('.with_watermark').attr('href'),
    nowm: $('.without_watermark').attr('href')
  }
}