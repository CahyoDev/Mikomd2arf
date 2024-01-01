import axios from 'axios'
import { somematch } from '../../lib/others.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		let style, teks = (text || '').toLowerCase()
		let img = await q.download()
		try {
			let res = ['color_line','fresh','makima','cat_ears','full_bloom','angel','gracefull','cold','snow_fall','manga','charming','stipple','cg','idol','comic_world','princess','anime25d','realistic','anime','comic','manhwa','manhwa_female','manhwa_male','jewelry','jewelry_sky','basketball','summer','cute_child','makeup_sunny','anime_idol','azure_sky']
			if (!somematch(res, teks)) return m.reply(`Example: *${usedPrefix+command} realistic*\n\n▧「 *available styles* 」\n│𖡛 ${res.join('\n│𖡛 ')}\n└──···`)
			let form = new FormData()
			let blob = new Blob([img], { type: 'image/jpeg' })
			form.append('file', blob, 'images.jpeg;type=image/jpeg')
			let anu = await axios.post('https://api.itsrose.life/image/differentMe', form, {
				params: {
					'style': teks,
					'json': true,
					'apikey': api.rose
				},
				headers: {
					'accept': 'application/json',
					'Content-Type': 'multipart/form-data'
				}
			})
			await conn.sendMsg(m.chat, { image: Buffer.from(anu.data.result.base64Image, 'base64'), caption: `*STYLE: ${teks}*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			throw 'Internal server error.'
		}
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.menuai = ['differentme']
handler.tagsai = ['maker']
handler.command = /^(diff?(erent)?me)$/i

handler.premium = true
handler.limit = true

export default handler