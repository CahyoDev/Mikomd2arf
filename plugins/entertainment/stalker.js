import { stalker } from '../../lib/scraper/stalker.js'

const st = new stalker()

let handler = async (m, { conn, usedPrefix, command, args }) => {
	let exam = `[ Contoh ]\n*${usedPrefix + command} github clicknetcafe*\n\n*Stalk yang tersedia :*\n⭔ ig\n⭔ github\n⭔ tiktok`
	if (command == 'stalk' && !args[1]) throw exam
	if (command != 'stalk' && !args[0]) throw `Format : *${usedPrefix + command} [id/username]*\nExample : *${usedPrefix + command} clicknetcafe*`
	let text = (command == 'stalk' ? args.slice(1).join(' ') : args.join(' ')).replace('@','').trim()
	let url, txt = '', cmd = command == 'stalk' ? args[0] : command.replace('stalk','')
	try {
		if (/tt|tiktok/.test(cmd)) {
			let anu = await st.tiktok(text)
			if (anu.status != 200) throw Error()
			txt += `*${anu.username}*\n`
			for (let x of Object.keys(anu).filter(v => !/sta|pro/.test(v))) {
				txt += `\n*${x} :* ${anu[x]}`
			}
			url = anu.profile
		} else if (/gh|github/.test(cmd)) {
			let anu = await st.github(text)
			for (let x of Object.keys(anu).filter(v => !v.includes('_url'))) {
				txt += `\n*${x} :* ${anu[x]}`
			}
			url = anu.avatar_url
		} else if (/twit(ter)?/.test(cmd)) {
			let anu = await st.twitter(text)
			txt += `*${anu.username}*\n`
			for (let x of Object.keys(anu).filter(v => !/pro|back|desc/.test(v))) {
				txt += `\n*${x} :* ${anu[x]}`
			}
			txt += `\n*desc :*\n${anu.desc_text}`
			url = anu.profile
		} else if (/npm/.test(cmd)) {
			let anu = await st.npm(text)
			for (let x of Object.keys(anu).filter(v => !/sta|read/.test(v))) {
				if (/info/.test(x)) {
					txt += `\n\n*[ INFO ]*`
					for (let y of anu[x]) txt += `\n*${y.type} :* ${y.result}`
				} else if (/collab/.test(x)) {
					txt += `\n\n*[ COLLABORATOR ]*`
					for (let y of anu[x]) txt += `\n*${y.name} :* ${y.url}`
				} else if (/keywords/.test(x)) txt += `\n*keywords :* ${anu[x].join(', ')}`
				else txt += `\n*${x} :* ${anu[x]}`
			}
			return m.reply(txt)
		} else if (/ig|instagram/.test(cmd)) {
			let anu = await st.instagram(text)
			if (anu.status != 200) throw Error()
			txt += `*${anu.username}*\n`
			for (let x of Object.keys(anu).filter(v => !/sta|pro|des/.test(v))) {
				txt += `\n*${x} :* ${anu[x]}`
			}
			txt += `\n*desc :* ${anu.description}`
			url = anu.profile
		} else return m.reply(exam)
		if (url) await conn.sendFile(m.chat, url, '', txt, m)
	} catch (e) {
		console.log(e)
		throw 'id / username not found.'
	}
}

handler.help = ['github','ig','npm','tiktok','twitter'].map(v => 'stalk'+v)
handler.tags = ['entertainment']
handler.command = /^(stalk|stalk(github|gh|ig|npm|instagram|tt|tiktok|twit(ter)?)|(github|gh|ig|npm|instagram|tt|twit(ter)?|tiktok)stalk)$/i

handler.premium = true
handler.limit = true

export default handler