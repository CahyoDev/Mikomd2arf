import { delay } from '../../lib/others.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	await delay(2000)
	switch (command) {
		case "bacot": 
		case "bucin":
		case "gombal": 
		case "hacker": 
		case "motivasi":
		case "muslim": 
		case "ngawur": 
		case "pantun": 
		case "quotes": 
		case "senja": 
		case "sadboy": {
			try {
				let res = await fetch("https://raw.githubusercontent.com/ArifzynXD/database/master/quotes/"+command+".json")
				let anu = await res.json()
				m.reply(anu.getRandom())
			} catch (e) {
				console.log(e)
				throw "Terjadi kesalahan, silahkan coba lagi nanti"
			}
		}
		break
	}
}

handler.help = ['quotes', 'bacot', 'bucin', 'gombal', 'hacker', 'motivasi', 'muslim', 'ngawur', 'pantun', 'senja', 'sanboy']
handler.tags = ['randomtext']
handler.command = ['quotes', 'bacot', 'bucin', 'gombal', 'hacker', 'motivasi', 'muslim', 'ngawur', 'pantun', 'senja', 'sanboy']

handler.premium = true
handler.limit = true

export default handler