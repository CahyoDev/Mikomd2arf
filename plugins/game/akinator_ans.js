import db from '../../lib/database.js'
import fetch from 'node-fetch'
import { somematch } from '../../lib/others.js'

const shp = "•";
const teks = '0 - Ya\n1 - Tidak\n2 - Saya Tidak Tau\n3 - Mungkin\n4 - Mungkin Tidak\n5 - Kembali ke pertanyaan sebelumnya'

export async function before(m) {
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !1
	let daki = db.data.games.akinator
	if (daki[m.sender] == undefined) return 
	if (!somematch(['0','1','2','3','4','5'], m.text)) return this.reply(m.chat, `[!] Jawab dengan angka 1, 2, 3, 4, atau 5\n\n${teks}`, aki.soal)
	await daki[m.sender].step(m.text);
	if (daki[m.sender].progress >= 80 || daki[m.sender].currentStep >= 78) {
		await daki[m.sender].win();
		if (daki[m.sender].answers.length == 1) {
			try {
				let res = daki[m.sender].answers[0];
				let ppres = daki[m.sender].answers[0].absolute_picture_path;
                let anuu = `*AKINATOR GAME RESULT*\n\n• *ID :* ${res.id}\n• *Name :* ${res.name}\n• *Description :* ${res.description}\n• *Rangking :* ${res.ranking}\n• *Pseudo :* ${res.pseudo}\n• *Nsfw :* ${res.nsfw}`;
                await this.sendFile(m.chat, ppres, '.jpg', anuu, m)
            } catch {    
                m.reply(await tool.parseResult("AKINATOR GAME RESULT", daki[m.sender].answers[0], { delete: ["picture_path", "pseudo", "nsfw"] }));
            }    
            return delete daki[m.sender];
        }     
    }        
    m.reply(`🎮 *Akinator Games* 🎮\n\n${shp} Step : ${daki[m.sender].currentStep + 1}\n${shp} Progress : ${daki[m.sender].progress}\n${shp} Pertanyaan : ${daki[m.sender].question}\n\n${teks}`)
	return !0
}