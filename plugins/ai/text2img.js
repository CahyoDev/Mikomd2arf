import db from '../../lib/database.js'
import { ranNumb, delay } from '../../lib/func.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	if (!text) throw `masukkan detail gambar`
	let status, i = 0
	let lserver = ['frieren','jisoo','lisa','rose']
	let server = lserver.getRandom()
	let f = await m.reply(`[!] _Wait, generating from '${server}' server. . ._`)
	do {
		let anu = await txt2img(text, server, (m.isGroup && db.data.chats[m.chat].nsfw) ? true : false)
		await conn.reply(m.chat, `[!] _${i > 0 ? 'Failed, changed to' : 'Wait, generating from'} '${server}' server._${anu.model ? `\n_using '${anu.model}' model_` : ''}`, 0, { edit: f })
		status = anu.status
		if (anu.status) {
			anu = anu.result
			let meta = anu.metadata
			let txt = `${text}\n`
			+ `\n*server :* ${anu.server_name}`
			+ `\n*model :* ${meta.model_id}`
			+ `\n*resolution :* ${meta.W} x ${meta.H}`
			+ `\n*is_nsfw :* ${meta.is_nsfw}`
			+ `\n*scheduler :* ${meta.scheduler}`
			for (let x=0;x<anu.images.length;x++) {
				await delay(anu.generation_time+2500)
				let img = await fetch(anu.images[x])
				let fimg = Buffer.from(await img.arrayBuffer())
				if (Buffer.byteLength(fimg) > 50000) await conn.sendFile(m.chat, fimg, '', x > 0 ? `${meta.model_id} model (${x+1})` : txt, m)
				else {
					status = false
					if (i == 3) m.reply('failed to fetch image buffer.')
				}
			}
		} else {
			if (i == 3) m.reply(anu.message)
		}
		lserver = lserver.filter(v => v != server)
		server = lserver.getRandom()
		i++;
	} while (i < 4 && status != true)
}

handler.menuai = ['txt2img']
handler.tagsai = ['maker']
handler.command = /^(te?xt2?ima?ge?|diff?f?(usion)?)$/i

handler.premium = true
handler.limit = true

export default handler

Number.prototype.FindClosestNumberThatIsDivisibleBy = function(n) {
	return Math.round(this / n) * n
}

async function txt2img(text, server, nsfw = true) {
	const reso = ranNumb(720, 1024).FindClosestNumberThatIsDivisibleBy(8)
	try {
		let res = await (await fetch(`https://api.itsrose.life/image/diffusion/get_all_models?server_name=${server}&apikey=${api.rose}`)).json()
		if (!res.status) return { status: false, message: res.message }
		res = res.result
		const filter = new RegExp(`^(?!.*(25d|8797|aing_diff|aom3|bro623|cleanlinear|disney|grape|sd-1|toon|comi(c|x)|gta|journey_v2|meina|mix|pastel|perfect-v1|redshift|sxz-luma${nsfw ? '' : '|hentai|porn'})).*$`, 'i')
		const model = res.models.filter(v => filter.test(v)).getRandom()
		await delay(1500)
		let anu = await (await fetch(`https://api.itsrose.life/image/diffusion/txt2img?apikey=${api.rose}`, {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				server_name: server,
				prompt: text,
				negative_prompt: `${nsfw ? '' : 'nsfw, nude, '}bad anatomy, lowres, extra hands, extra legs, extra finger`,
				width: reso,
				height: reso,
				steps: 25,
				model_id: model,
				sampler: res.samplers.getRandom(),
				cfg: 7.5,
				seed: '',
				enhance_prompt: 'yes',
				multi_lingual: 'yes',
				image_num: 2,
				panorama: 'no',
				safety_checker: 'no',
				safety_checker_type: 'blur',
				lora_model: '',
				lora_strength: 1,
				clip_skip: 2,
				embeddings_model: '',
				webhook: ''
			})
		})).json()
		return { ...anu, model }
	} catch (e) { return { status: false, message: e.response.data.message } }
}