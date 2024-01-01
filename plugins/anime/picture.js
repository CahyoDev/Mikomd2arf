import db from "../../lib/database.js"
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
    if (!db.data.users[m.sender].premium) return m.reply("Khsus Premium")
	try {
		let res = await fetch(`https://raw.githubusercontent.com/ArifzynXD/database/master/anime/${command}.json`)
		let anu = await res.json()
		conn.sendMsg(m.chat, { image: { url: anu.getRandom() }, caption: `_Random pic:_ ${command}` }, { quoted: m })
	} catch (e) {
		console.log(e)
		reply("dowm")
	}
}
handler.menuanime = ['akira','akiyama', 'ana', 'asuna', 'ayuzawa', 'boruto', 'chitanda', 'chitoge', 'deidara', 'doraemon', 'elaina', 'emilia', 'erza', 'gremory', 'hestia', 'hinata', 'hitorigottoh', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kakasih', 'kaori', 'keneki', 'kosaki', 'kotori', 'kuriyama', 'kuroha', 'kurumi', 'loli', 'madara', 'megumin', 'mikasa', 'miku', 'minato', 'naruto', 'natsukawa', 'neko', 'nekonime', 'nezuko', 'nishimiya', 'onepiece', 'pokemon', 'ppcouple', 'ppcouple2', 'rem', 'rize', 'sagiri', 'sakura', 'sasuke', 'shina', 'shinka', 'shizuka', 'shota', 'tomori', 'toukachan', 'tsunade', 'waifu', 'waifu', 'waifu2', 'wallhp2', 'yatogami', 'yuki']
handler.tagsanime = ['randomimage']
handler.command = /^(kagura|ppcouple|akira|kakasih|ppcouple2.js|akiyamakaori|rem|ana|keneki|rize|asuna|kosaki|sagiri|ayuzawa|kotori|sakura|boruto|kuriyama|sasuke|chitanda|kuroha|shina|chitoge|kurumi|shinka|deidara|loli|shizuka|doraemon|madara|shota|elaina|megumin|tomori|emilia|mikasa|toukachan|erza|miku|tsunade|gremory|minato|waifu|hestia|naruto|hinata|natsukawa|waifu2|hitorigottoh|neko|wallhp2|inori|nekonime|yatogami|isuzu|nezuko|yuki|itachi|nishimiya|yuri|itori|onepiece|kaga|pokemon)$/i

handler.premium = true

export default handler