import { anime } from "../../lib/scraper/anime.js"
import axios from "axios";
import PDFDocument from "pdfkit";
import { extractImageThumb } from "@whiskeysockets/baileys";
import fetch from "node-fetch";

const handler = async (m, { conn, usedPrefix, command, text, args }) => {
	let exam = `_*Example using :*_\n\n` 
	  + `*Search:*\n_${usedPrefix+command} <query>_\n_${usedPrefix+command} seirei gensouki_\n`
	  + `*Detail:*\n_${usedPrefix+command} <number>_\n_${usedPrefix+command}  1_\n`
	  + `*Chapter:*\n_${usedPrefix+command} chapter <number>_\n_${usedPrefix+command} chapter 1_\n\n`
	  + `Silahkan Search Untuk Mendapatkan Number Detail Dan Chapter`
	if (!text) return m.reply(exam)
	try {
		global.komiku = global.komiku ? global.komiku : []
		const check = global.komiku.find(v => v.jid == m.sender)
		if (!check && !isNaN(text)) return m.reply(`Your session has expired / does not exist, do another search using the keywords you want.`)
		if (/chapter/.test(args[0])) {
			if (Number(text) > check.chapter.length) return m.reply(`Exceed amount of data.`)
			if (isNaN(args[1])) return m.reply("Only Number.")
			const json = await anime.komiku.getChapter(check.chapter[Number(args[1]) - 1])
			m.reply("Wait Proses Download...")
			const image = json.images.map(v => v.url)
			const res = await toPDF(image)
			conn.sendMsg(m.chat, { document: res, caption: json.title, fileName: json.title + ".pdf", mimetype: "application/pdf" }, { quoted: m })
		} else if (check && !isNaN(text)) {
			if (Number(text) > check.results.length) return m.reply(`Exceed amount of data.`)
			const json = await anime.komiku.detail(check.results[Number(text) - 1])
			let txt = `[  *K O M I K U* ]\n\n`
			txt += `	\u2022  *Title* : ${json.title}\n`
			for (let key in json.metadata)
			if (!/chapters|genre/i.test(key))
			txt += `	\u2022  *${ucword(key).replace("_", ' ')}* : ${json.metadata[key]}\n`
            txt += `\n[  *S I N O P S I S* ]\n\n`
            txt +=`${json.sinopsis}\n`  
            txt += `\n[ *C H A P T E R S* ]\n\n` 
            txt += json.chapters.reverse().map((v, i) => `${i+1} - ${v.title} (${v.upload})\n*Link* : ${v.url}`).join('\n\n')
			conn.sendFile(m.chat, json.img, '', txt, m).then(() => {
				check.chapter = json.chapters.map(v => v.url)
			})
		} else {
			const json = await anime.komiku.search(text)
            if (!check) {
               global.komiku.push({
                  jid: m.sender,
                  results: json.map(v => v.link),
                  created_at: new Date * 1
               }) 
            } else check.results = json.map(v => v.link)
            let p = `To showing information use this command *${usedPrefix + command} number*\n`
            p += `*Example* : ${usedPrefix + command} 1\n\n`
            if (json.length == 0) return m.reply(`Query *${text}* not found`) 
            json.map((v, i) => {
               p += `*${i+1}*. ${v.title}\n`
               p += ` \u2022 *image* : ${v.img}\n`
               p += ` \u2022 *url* : ${v.link}\n\n`
            }).join('\n\n')
            m.reply(p)
		}  
		setInterval(() => {
			const currentTime = new Date();
			const expiredSessions = global.komiku.filter(session => currentTime - session.created_at > global.timer);
			
			if (expiredSessions.length > 0) {
				expiredSessions.forEach(session => {
					const index = global.komiku.indexOf(session);
					if (index !== -1) {
						global.komiku.splice(index, 1); // Menghapus objek dari array
                        console.log("delete session sukses")
                    }
               });
            }
       }, 60000);
	} catch (e) {
		console.log(e)
		throw "Server Internal Error"
	}
}
handler.command = /^(komiku)$/i 
handler.menuanime = ["komiku"]
handler.tagsanime = ["animanga"]

handler.limit = true 

export default handler 

function ucword (str) {
	return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
		return $1.toUpperCase();
    })      
}  

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images];
		let buffs = [],
			doc = new PDFDocument({ margin: 0, size: "A4" });
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue;
			let data = (
				await axios.get(images[x], { responseType: "arraybuffer", ...opt })
			).data;
			doc.image(data, 0, 0, {
				fit: [595.28, 841.89],
				align: "center",
				valign: "center",
			});
			if (images.length != x + 1) doc.addPage();
		}
		doc.on("data", (chunk) => buffs.push(chunk));
		doc.on("end", () => resolve(Buffer.concat(buffs)));
		doc.on("error", (err) => reject(err));
		doc.end();
	});
}
