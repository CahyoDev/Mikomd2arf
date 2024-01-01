import db from '../../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakmanga = this.tebakmanga ? this.tebakmanga : {}
	if (!(id in this.tebakmanga))
		return
	if (m.quoted.id == this.tebakmanga[id][0].id) {
		let anu = JSON.parse(JSON.stringify(this.tebakmanga[id][1]))
		if (m.text.toLowerCase() == anu.title.toLowerCase().trim()) {
			user.exp += this.tebakmanga[id][2]
			user.money += this.tebakmanga[id][2]
			user.spamcount += 2
			this.reply(m.chat, `*Benar!* 🎉\n\n+${this.tebakmanga[id][2]} Exp\n+${this.tebakmanga[id][2]} Money`, m)
			clearTimeout(this.tebakmanga[id][3])
			delete this.tebakmanga[id]
		} else if (similarity(m.text.toLowerCase(), anu.title.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0
export const money = 0