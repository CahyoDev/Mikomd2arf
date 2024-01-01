import fetch from 'node-fetch'
import uploadImage from '../../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		let upld = await q.download?.()
		let img = await uploadImage(upld)
		try {
			let res = await fetch(`https://api.itsrose.life/image/${command.replace(/filter/, '')}?url=${img}&apikey=${api.rose}`)
			if (res.status == false) throw 'Request False'
			let buffer = await res.arrayBuffer()
			await conn.sendFile(m.chat, buffer, '', 'Sudah Jadi Kak >//<', m)
		} catch {
			throw 'Proses gagal :(Gagal Kak, Tidak Terdeteksi Wajahnya :)'
		}
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.menuai = ['arcane','artfilter','comics','disney','jojo','palette','unblur','yasuo']
handler.tagsai = ['filter']
handler.command = /^(arcane|artfilter|comics|disney|jojo|palette|unblur|yasuo)$/i

handler.premium = true
handler.limit = true

export default handler