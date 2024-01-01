import axios from 'axios'
import fs from 'fs'
import { sticker } from '../../lib/sticker.js'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Masukan Text'
	let name = await conn.getName(m.sender)
	let avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_=> "https://telegra.ph/file/a4ec75f6ce8b2b565a3e3.png")
	const json = {
		"type": "quote",
		"format": "png",
		"backgroundColor": "#FFFFFF",
		"width": 512,
		"height": 768,
		"scale": 2,
		"messages": [
		{
			"entities": [],
			"avatar": true,
			"from": {
				"id": 1,
				"name": name,
				"photo": {
					"url": avatar
             }
         },
         "text": text,
         "replyMessage": {}
      }
    ]
  };
  const res = await axios.post('https://server-id.caliph.my.id/generate', json, {
 	headers: {
 		'Content-Type': 'application/json'
     }
  })
  .catch((e) => {
  	throw "Terjadi kesalahan"
  })
  const buffer = await sticker(Buffer.from(res.data.result.image, 'base64'), false, "By Miko Store", "Bot WhatsApp")
  conn.sendFile(m.chat, buffer, 'sticker.webp', '', m)
}
handler.command = ['qc']
handler.help = ["qc"]
handler.tags = ["creator"]

handler.limit = true 

export default handler