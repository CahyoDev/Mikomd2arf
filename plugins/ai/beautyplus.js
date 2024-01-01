import axios from 'axios'
import fetch from 'node-fetch'
import FormData from 'form-data'
import uploadImage from '../../lib/uploadImage.js'
import { somematch } from '../../lib/others.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!mime) throw `Fotonya Mana Kak?`
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		if (!args[0]) throw `[!] Input enhance level\n\nExample : *${usedPrefix + command} 4*`
		let styles = Array.from({length: 10}, (_, i) => i + 1).map(v => v.toString())
		if (somematch(styles, args[0])) styles = [args[0]]
		else throw `Enhance level between 1 - 10`
		let media = await q.download()
		let url = await uploadImage(media)
		let sendPromises = styles.map(async (style) => {
			let queryParams = {
				enhance: styles,
				json: false, // get image response instead of json
			}

			let response = await fetch(url)
			let buffer = await response.buffer()
			let form = new FormData()
			form.append('file', buffer, {
				filename: 'image.jpg',
				contentType: 'image/jpeg',
				knownLength: buffer.length,
			})

			let { data } = await axios.request({
				baseURL: 'https://api.itsrose.life',
				url: '/image/beauty_plus',
				method: 'POST',
				params: {
					...queryParams,
					apikey: api.rose,
				},
				data: form,
				responseType: 'arraybuffer', 
			}).catch((e) => e?.response?.data)

			let resultBuffer = Buffer.from(data, 'binary') 
			let caption = `Enhance Level : *${args[0]}*`
			return conn.sendFile(m.chat, resultBuffer, 'ppk.jpg', caption, m)
		})
		await Promise.all(sendPromises)
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.menuai = ['beautyplus']
handler.tagsai = ['maker']
handler.command = /^(beautyplus)$/i

handler.premium = true
handler.limit = true

export default handler