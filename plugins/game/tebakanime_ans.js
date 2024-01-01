import db from '../../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakanime = this.tebakanime ? this.tebakanime : {}
	if (!(id in this.tebakanime))
		return
	if (m.quoted.id == this.tebakanime[id][0].id) {
		let anu = JSON.parse(JSON.stringify(this.tebakanime[id][1]))
		if (m.text.toLowerCase() == anu.title.toLowerCase().trim()) {
			user.exp += this.tebakanime[id][2]
			user.money += this.tebakanime[id][2]
			user.spamcount += 2
			this.reply(m.chat, `*Benar!* 🎉\n\n+${this.tebakanime[id][2]} Exp\n+${this.tebakanime[id][2]} Money`, m)
			clearTimeout(this.tebakanime[id][3])
			delete this.tebakanime[id]
		} else if (similarity(m.text.toLowerCase(), anu.title.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0
export const money = 0