import uploadImage from '../../lib/uploadImage.js'
import fetch from 'node-fetch'
import FormData from 'form-data'
import { fileTypeFromBuffer } from "file-type"

let handler = async (m, { conn, usedPrefix, command, args }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
		let prompt = '', teks = (args[0] || '').toLowerCase().trim()
		let img = await q.download()
		let out = await upload(img)
		out = out.result.url_file
		try {
			let y = 0
			if (/jadi/.test(command) || command.startsWith('to')) {
				teks = command.replace(/jadi|to/,'')
				prompt = args.join(' ')
			} else {
				teks = args[0]
				prompt = args[1] ? args.slice(1).join(' ') : ''
			}
			let anu = await (await fetch(`https://api.itsrose.life/image/turnMe?apikey=${api.rose}`, {
				method: 'POST',
				headers: {
					'accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					init_image: out,
					style: teks,
					skin: 'default',
					image_num: 2,
					prompt: prompt
				})
			})).json()
			if (!anu.status) return m.reply(anu.styles ? `Example: *${usedPrefix+command} zombie*\n\n▧「 *available styles* 」\n│✦ ${anu.styles.join('\n│✦ ')}\n└──···` : anu.message)
			for (let x of anu.result.images) {
				await conn.sendFile(m.chat, x, '', `${y < 1 ? `*STYLE: ${teks}*` : `${teks} style (${y+1})`}${prompt ? `\nprompt : ${prompt}` : ''}`, m)
				y++;
			}
		} catch (e) {
			console.log(e)
			throw e.response?.data?.message || 'Internal server error.'
		}
	} else throw `Kirim Gambar Dengan Caption *${usedPrefix + command}*`
}

handler.menuai = [...['anime','barbie','cyberpunk','pokemon','zombie'].map(v => 'jadi'+v), ...['*turnme*']]
handler.tagsai = ['maker']
handler.command = /^((jadi|to)(anime|barbie|cyberpunk|pokemon|zombie)|turnme)$/i

handler.premium = true
handler.limit = true

export default handler

async function upload(buffer) {
	return new Promise(async (resolve, reject) => {
		let { ext } = await fileTypeFromBuffer(buffer);
		const bodyForm = new FormData();
		bodyForm.append("file", buffer, "filename." + ext);
		const response = await fetch("https://storage.neko.pe/api/upload.php", {
			method: "post",
			body: bodyForm,
        });
        
        const res = await response.json()
        resolve({
        	status: response.status,
        	result: res.result,
        })
	})
}
