import { delay } from '../../lib/others.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	await delay(2000)
	try {
		let fimg = await fetch(`https://raw.githubusercontent.com/ArifzynXD/database/master/quotes/image.json`)
		let fimgb = await (await fimg.json()).getRandom()
		await conn.sendFile(m.chat, fimgb, '', `_© Quote untuk Anda_`, m)
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.help = ['quoteimage'] 
handler.tags = ['randomtext']
handler.command = /^(quotes?image)$/i

handler.premium = true
handler.limit = true

export default handler 