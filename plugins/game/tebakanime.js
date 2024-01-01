import db from '../../lib/database.js'

let timeout = 120000
let poin = 2999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
	let id = m.chat
	if (id in conn.tebakanime) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
		throw false
	}
	let usr = db.data.users[m.sender]
	if (usr.limit < 1 && usr.money > 50000 && !isPrems) throw `Beli limit dulu lah, duid lu banyak kan 😏`
	else if (usr.limit > 0 && !isPrems) usr.limit -= 1
	let anu = await (await fetch(`https://api.jikan.moe/v4/random/anime`)).json()
	anu = anu.data
	let caption = `
🎮 *Tebak Anime* 🎮

⭔ Timeout *${(timeout / 1000).toFixed(2)} detik*
⭔ Bonus: ${poin} Exp and ${poin} Money
`.trim()
	conn.tebakanime[id] = [
		await conn.sendFile(m.chat, anu.images.jpg.image_url, '', caption, m),
		anu, poin,
		setTimeout(() => {
			if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${anu.title}*\n\n${anu.url}\n\n${anu.synopsis || anu.type+' - '+anu.status}`, conn.tebakanime[id][0])
			delete conn.tebakanime[id]
		}, timeout)
	]
	console.log(anu.title)
}

handler.menufun = ['tebakanime (exp+) (money+)']
handler.tagsfun = ['game']
handler.command = /^(tebakanime)$/i

handler.premium = true
handler.game = true

export default handler