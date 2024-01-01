import db from '../../lib/database.js'

let timeout = 120000
let poin = 2999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	conn.tebakmanga = conn.tebakmanga ? conn.tebakmanga : {}
	let id = m.chat
	if (id in conn.tebakmanga) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakmanga[id][0])
		throw false
	}
	let usr = db.data.users[m.sender]
	if (usr.limit < 1 && usr.money > 50000 && !isPrems) throw `Beli limit dulu lah, duid lu banyak kan 😏`
	else if (usr.limit > 0 && !isPrems) usr.limit -= 1
	let anu = await (await fetch(`https://api.jikan.moe/v4/random/manga`)).json()
	anu = anu.data
	let caption = `
🎮 *Tebak Manga* 🎮

⭔ Timeout *${(timeout / 1000).toFixed(2)} detik*
⭔ Bonus: ${poin} Exp and ${poin} Money
`.trim()
	conn.tebakmanga[id] = [
		await conn.sendFile(m.chat, anu.images.jpg.image_url, '', caption, m),
		anu, poin,
		setTimeout(() => {
			if (conn.tebakmanga[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${anu.title}*\n\n${anu.url}\n\n${anu.synopsis}`, conn.tebakmanga[id][0])
			delete conn.tebakmanga[id]
		}, timeout)
	]
	console.log(anu.title)
}

handler.menufun = ['tebakmanga (exp+) (money+)']
handler.tagsfun = ['game']
handler.command = /^(tebakmanga)$/i

handler.premium = true
handler.game = true

export default handler