import youtube from "@yimura/scraper";
const yt = new youtube.default();

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Sia Unstopable`
	try {
			let anu = await yt.search(text)
			anu = anu.videos[0]
			let txt = `📌 *${anu.title}*\n\n`
			txt += `🪶 *ID :* ${anu.id}\n`
			txt += `⏲️ *Uploaded :* ${anu.uploaded}\n`
			txt += `⌚ *Duration :* ${anu.duration}\n`
			txt += `👁️ *Views :* ${anu.views}\n`
			txt += `🌀 *Url :* ${anu.link}`
			await conn.sendMsg(m.chat, { image: { url: anu.thumbnail }, caption: txt }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply("tidak temukan hasil")
  }
}

handler.menudownload = ['ytplay <teks> / <url>']
handler.tagsdownload = ['search']
handler.command = /^(play|(play)?yt(play|dl)?)$/i

export default handler