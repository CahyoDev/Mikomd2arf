import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} fb_url_video*\n\nExample :\n${usedPrefix + command} https://web.facebook.com/watch/?v=892725951575913`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	m.reply("*[!]* Proses Download...")
	try {
		let anu = await fbdl(args[0])
		if (anu.status != 200) throw Error()
	    if (/hd/.test(args[1])) {
		  await conn.sendFile(m.chat, anu.hd.link, "error.mp4", anu.hd.quality, m)
        } else {
          await conn.sendFile(m.chat, anu.sd.link, "error.mp4", anu.sd.quality, m)
        }
    } catch (e) {
    	console.log(e)
    	throw "Invalid URL / Server Down" 
    }
}

handler.menudownload = ['fb <url>']
handler.tagsdownload = ['search']
handler.command = /^(fb|facebook)$/i

handler.premium = true
handler.limit = true 

export default handler

const fbdl = (url) => {
  return new Promise (async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        id: url, 
        locale: "id"
      })
    )
    const { data } = await axios.post("https://getmyfb.com/process", payload, {})
    .catch((e) => { 
      resolve({
        status: 404,
        data: e?.response
      })
    })
    const $ = cheerio.load(data)
    const result = {
      status: 200,
      hd: {
        quality: $(".results-list-item").eq(0).text().replace(/\n|Unduh/g, "").trim(),
        link: $(".results-list-item a").attr("href")
      },
      sd: {
        quality: $(".results-list-item").eq(1).text().replace(/\n|Unduh/g, "").trim(),
        link: $(".results-list-item a").eq(1).attr("href")
      }
    }
    resolve(result)    
  })
}