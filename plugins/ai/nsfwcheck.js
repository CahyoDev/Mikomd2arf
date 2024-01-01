import fetch from 'node-fetch'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		let upld = await q.download?.()
		let img = await uploadImage(upld)
		try {
			let res = await (await fetch(`https://api.itsrose.life/image/nsfwCheck?url=${img}&apikey=${api.rose}`)).json()
			if (!res.status) throw 'Failed to detect'
			m.reply(JSON.stringify(res, null, 4))
		} catch {
			throw 'Failed to detect'
		}
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.menuai = ['ceknsfw']
handler.tagsai = ['openai']
handler.command = /^(ch?ec?knsfw|nsfwch?ec?k)$/i

handler.limit = true

export default handler