import db from '../../lib/database.js'

export async function before(m) {
	let menid = m.quoted ? m.quoted.id : ''
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
	let menfess = db.data.datas.menfess
	if (!Object.keys(menfess).includes(m.quoted.id)) return !0
	let p = m.quoted.id
	let x = menfess[p]
	await this.reply(x.sender, `Kamu mendapat balasan dari @${x.target.split('@')[0]}\n\nPesanmu :\n${x.text}\n\nPesan Balasan Darinya :\n${m.text}`, null, { mentions: [x.target] })
	await m.reply(`[ sukses membalas ]\n\n Tertarik mencoba ? Ketik .menfess`)
	delete menfess[p]
	return !0
}

export const money = 0