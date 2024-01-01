import axios from 'axios'
import cheerio from 'cheerio'

const handler = async (m, { conn, usedPrefix, command, text }) => {
	if (!text) throw `[!] Input URL Params\n\n*Example :* ${usedPrefix+command} https://sfile.mobi/KXpTt7t1QY7`
	m.reply("[!] Process Download...")
    try {
    	const res = await sfilemobi(text)
    	conn.sendMsg(m.chat, { document: { url: res.url }, fileName: res.title + ".apk", mimetype: res.mimetype }, { quoted: m })
    } catch (e) {
    	console.log(e)
    	throw "Invalid URL / Server Down"
    }
}
handler.menudownload = ["sfile"]
handler.tagsdownload = ["search"]
handler.command = /^(sfile|sfilemobi)$/i 
 
handler.limit = true 
handler.premium = true  
 
export default handler  

function sfilemobi(url) {
    return new Promise(async(resolve, reject) => {
		const html = await axios.get(url)
		.then(({ data }) => { 
	    const $ = cheerio.load(data);					
	    const urls = $('#download').attr('onclick');
			const results = {
				title: $("div.intro-container.w3-blue-grey h1").text().trim(),
				mimetype: $("div.list").eq(0).text().split('-')[1],
				url: $('#download').attr('href') + `&k=${urls.match(/(?<=\')[^\']+?(?=\')/g).pop()}` 
			}
		  resolve(results)
		})
	})
}
