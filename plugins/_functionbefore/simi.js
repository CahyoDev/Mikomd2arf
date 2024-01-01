import db from "../../lib/database.js"
import axios from 'axios'

const simtalk = (text, lang) => {
	return new Promise(async (resolve, reject) => {
		const form = new URLSearchParams()
		form.append("text", text)
		form.append("lc", lang) 
		const { data } = await axios.post("https://simsimi.vn/web/simtalk", form)
		resolve({
			status: 200,
			data,
        })
	})
}

let handler = (m) => m;
handler.before = async (m) => {
	if (!m.isGroup) return
	let chat = db.data.chats[m.chat];
	if (chat.simi && !chat.isBanned) {
		if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
		if (!m.text) return;
		let res = await simtalk(m.text, "id");
		await m.reply(`${res.data.success}`);
		return !0;
    }
    return true; 
};
export default handler;
