import axios from "axios"

const handler = async (m, { conn, text, isMods }) => {
	if (!text) throw '⌕ Contoh: .hutao siapa namamu?';
	try {
		const response = await axios.get("https://ai.arifzyn.com/api?id=UXcPdzizz8tK7x7Gbao4b4zwjewTpJFbT8SYDZJqaK4&teks=" + text, {
			headers: {
				Authorization: global.api.c_token
    	    }
        })
        conn.sendFThumb(m.chat, 'HuTao Character.', response.data.message.text, "https://telegra.ph/file/c7a913d6b1945fbaae0c7.jpg", "", m, author)
    } catch (error) {
    	console.error('Error:', error);
    	m.reply(error); 
    } 
}; 
  
handler.menuai = ['hutao']; 
handler.tagsai = ['openai']; 
handler.command = /^(hutao)$/i; 

handler.rowner = true 

export default handler;