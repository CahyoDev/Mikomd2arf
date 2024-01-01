import db from '../../lib/database.js'
import { ranNumb, delay } from '../../lib/func.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	if (!text) throw `masukkan detail gambar`
	let status, i = 0
	let lserver = ['frieren','jisoo','lisa','rose']
	let server = lserver.getRandom()
	do {
		if (i == 0) m.reply(`[!] _Wait, generating from random server. . ._\n(frieren, jisoo, lisa, rose)`)
		if (i == 3) m.reply(`Failed, try generating from '${server}' server. . ._`)
		let anu = await txt2img(text, server, (m.isGroup && db.data.chats[m.chat].nsfw) ? true : false)
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
				await delay(anu.generation_time+500)
				let img = await fetch(anu.images[x])
				let fimg = Buffer.from(await img.arrayBuffer())
				if (Buffer.byteLength(fimg) > 50000) await conn.sendMsg(m.chat, { image: fimg, caption: x == 0 ? txt : `'${meta.model_id}' picture (${x+1})` }, { quoted: m })
				else {
					status = false
					if (i == 3) m.reply('Internal server error.')
				}
			}
		} else {
			if (i == 3) m.reply('Internal server error.')
		}
		await delay(1500)
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
		let model, res = await (await fetch(`https://api.itsrose.life/image/diffusion/get_all_models?server_name=${server}&apikey=${api.rose}`)).json()
		if (!res.status) return { status: false, message: res.message }
		res = res.result
		if (nsfw) model = res.models.filter(v => !/bro623|disney|toon|comi(c|x)|gta|mix/i.test(v)).getRandom()
		else model = res.models.filter(v => !/bro623|disney|toon|comi(c|x)|gta|mix|hentai|porn/i.test(v)).getRandom()
		let anu = await (await fetch(`https://api.itsrose.life/image/diffusion/txt2img?apikey=${api.rose}`, {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				server_name: server,
				prompt: text,
				negative_prompt: `${nsfw ? '' : 'nsfw, nude, '}paintings, sketches, bad coloring, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans`,
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
				lora_model: '',
				lora_strength: 1,
				clip_skip: 2,
				embeddings_model: '',
				tomesd: 'yes',
				webhook: ''
			})
		})).json()
		return anu
	} catch (e) { return { status: false, message: e.response.data.message } }
}