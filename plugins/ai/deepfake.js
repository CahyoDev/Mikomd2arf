import uploadImage from '../../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!mime) throw `Fotonya Mana Kak?`
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		try {
			let anu = await (await fetch(`https://api.itsrose.life/deep_fake/video?apikey=${api.rose}`, {
				method: 'POST',
				headers: {
					'accept': 'application/json',
					'Content-Type': 'application/json'
				},
					body: JSON.stringify({
					init_image: await uploadImage(await q.download()),
					style: text.toLowerCase().trim()
				})
			})).json()
			if (!anu.status) {
				if (anu.styles) {
					let st = anu.styles
					return m.reply(`Masukan style, contoh :\n*${usedPrefix+command}* ${st.getRandom()}\n\n*${st.length} Style tersedia :*\n- ${st.join('\n- ')}`)
				} else return m.reply(anu.message)
			}
			m.reply(`[!] _Deepfaking you, style '${text}' ..._`)
			let meta = anu.result.metadata
			let txt = `*Style :* ${meta.style}\n`
			+ `*Duration :* ${meta.duration} sec\n`
			+ `*Resolution :* ${meta.W} x ${meta.H}`
			await conn.sendMsg(m.chat, { video: { url: anu.result.video }, caption: txt }, { quoted: m })
		} catch (e) {
			console.log(e)
			throw 'Internal server error.'
		}
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.menuai = ['deepfake']
handler.tagsai = ['maker']
handler.command = /^(deepfake)$/i

handler.premium = true
handler.limit = true

export default handler