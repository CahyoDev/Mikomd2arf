import { ktpMaker } from "../../lib/scraper/ktpMaker.js"
import uploadImage from '../../lib/uploadImage.js'
import { fileTypeFromBuffer } from "file-type"
import request from "request"

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let [nik, name, ttl, jk, jl, rtrw, lurah, camat, prov, kabu, agama, nikah, kerja, warga, until, img] = text.split("|")
  if (!text) throw `Contoh : ${usedPrefix + command} NIK|Name|Tempat Tanggal Lahir|Jenis Kelamin|Alamat|RT/RW|Lurah|Kecamatan|Provinsi|Kabupaten|Agama|Status Nikah|Pekerjaan|Kewarganegaraan|Tanggal Kadaluarsa`;
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || q.mediaType || q.mtype || ''
  if (!mime || mime == 'conversation') throw "Kirim/Reply image"
  let out, pp = await q.download?.()
  try {
    out = await top4top(pp)
  } catch {
    out = "https://telegra.ph/file/fc1a65905fb17ae6af388.jpg"
  }
  m.reply("[!] Please Wait...")
  try {  
    let res = await ktpMaker(nik || '-', name || '-', ttl || '-', jk || '-', jl || '-', rtrw || '-', lurah || '-', camat || '-', prov || '-', kabu || '-', agama || '-', nikah || '-', kerja || '-', warga || '-', until || '-', out.result)
    let buffer = Buffer.from(res.image.split(",")[1], "base64")
    await conn.sendMsg(m.chat, { image: buffer, caption: "Sudah jadi kak >-<" }, { quoted: m })
  } catch (e) {
    throw "Error: Create Failed"  
    console.log(e)
  }
}
handler.help = ["ktpmaker"]
handler.tags = ["creator"]
handler.command = /^(ktpmaker)$/i

handler.limit = true 
handler.premium = true 

export default handler 

async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fileTypeFromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}