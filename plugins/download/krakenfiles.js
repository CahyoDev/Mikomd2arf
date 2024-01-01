import axios from 'axios'
import cheerio from 'cheerio'

const Arifzyn = async (m, { conn, usedPrefix, command, text }) => {
	if (!text) return m.reply(`*Usage : ${usedPrefix + command} url*\n\nExample :\n${usedPrefix + command} https://krakenfiles.com/view/P5yWeMrkJ3/file.html`)
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	m.reply("[!] Proses Download...")
	try { 
		let res = await krakenfiles(text)
		let txt = `${res.title}\n\n`
		  + `*Upload Date :* ${res.uploaddate}\n` 
		  + `*Last Download Date :* ${res.lastdownloaddate}\n` 
		  + `*File Size :* ${res.filesize}\n` 
		  + `*Type :* ${res.type}\n` 
		  + `*Views :* ${res.views}\n`
		  + `*Downloads :* ${res.downloads}`
		await conn.sendFile(m.chat, res.url, res.title, txt, m, false, {
            asDocument: true
        })
	} catch (e) {
		console.log(e)
		throw "Invalid URL / Server Error"
	}
}
Arifzyn.menudownload = ["krakenfiles"]
Arifzyn.tagsdownload = ["search"]
Arifzyn.command = /^(kf|krakenfiles)$/i

Arifzyn.limit = true 
Arifzyn.premium = true 

export default Arifzyn

const krakenfiles = async (url) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const fileHash = $("div.col-xl-4.col-lg-5.general-information").attr("data-file-hash")
    const tokens = $("input[name='token']").val()
    const result = {} 
    const payload = new URLSearchParams(
      Object.entries({
        token: tokens
      })
    )
    const { data: res } = await axios.post("https://s5.krakenfiles.com/download/" + fileHash, payload)
    result.title = $("div.coin-info > .coin-name > h5").text().trim()
    $("div.nk-iv-wg4-sub > .nk-iv-wg4-overview.g-2 > li").each(function () {
      const param = $(this).find("div.sub-text").text().replace(/ /g, '').toLowerCase()
      const value = $(this).find("div.lead-text").text().trim()
      result[param] = value 
    })
    result.views = $("div.views-count").text().trim()
    result.downloads = $("div.lead-text.downloads-count > strong").text().trim()
    result.fileHash = fileHash
    result.url = res.url
    resolve(result)
  })
}

