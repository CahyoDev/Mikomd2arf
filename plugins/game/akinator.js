import { Aki } from "aki-api-v2";
import fs from "fs";
import db from "../../lib/database.js";

let handler = async (m, { conn, command, args, text }) => {
  const daki = db.data.games.akinator;
  const shp = "•";
  const akin = `*AKINATOR GAME*

Pikirkan seorang karakter fiksi atau nyata.
Bot akan mencoba untuk menebaknya

${shp} Start.
• Untuk mulai bermain Akinator
${shp} Stop.
• Untuk mulai bermain Akinator
${shp} Game Session.    
• Untuk melihat sesi Akinator kamu\n`;
  let template = (args[0] || "").toLowerCase();
  if (!args[0]) {
    conn.sendFile(m.chat, "https://telegra.ph/file/cdc1f976cffcb98cf8033.jpg", "aki.jpg", akin, m)
  }
  //start akinator
  if (command) {
    switch (template) {
      case "start":
        {
          if (daki[m.sender]) {
            let foundp = "*AKINATOR GAME*\n\n";
            foundp += "Kamu sudah berada didalam permainan\n";
            foundp += `${shp} Game Session.\n    • Untuk melihat sesi akinator anda\n`;
            foundp += `${shp} Stop\n    •  Stop bermain Akinator`;
            conn.reply(m.chat, foundp, m)
          } else {
            daki[m.sender] = new Aki({
              region: "id",
              childMode: false,
              proxy: undefined,
            });
            await daki[m.sender].start();
            let txt = `🎮 *Akinator Games* 🎮\n\n${shp} Step : ${daki[m.sender].currentStep + 1}\n${shp} Progress : ${daki[m.sender].progress}\n${shp} Pertanyaan : ${daki[m.sender].question}`
            txt += `\n0 - Ya\n1 - Tidak\n2 - Saya Tidak Tau\n3 - Mungkin\n4 - Mungkin Tidak\n\n*.akinator stop* untuk keluar dari sesi Akinator`
            m.reply(txt)
          }
        }
        break;
      //stop akinator
      case "stop": {
        if (daki[m.sender] == undefined) return m.reply("Kamu tidak berada didalam permainan!");
        let foundp = "*AKINATOR GAME*\n\n";
        foundp += "Kamu sudah keluar dari Akinator\n";
        foundp += `${shp} Start.\n    • Untuk mulai bermain Akinator\n`;
        m.reply(foundp)
        delete daki[m.sender];
      }
      //show game session
      case "mysession":
        {
          if (daki[m.sender] == undefined) return m.reply("Kamu tidak berada didalam permainan!");
          let txt = `🎮 *Akinator Games* 🎮\n\n${shp} Step : ${daki[m.sender].currentStep + 1}\n${shp} Progress : ${daki[m.sender].progress}\n${shp} Pertanyaan : ${daki[m.sender].question}`
          txt += `\n\n0 - Ya\n1 - Tidak\n2 - Saya Tidak Tau\n3 - Mungkin\n4 - Mungkin Tidak\n\n*.akinator end* untuk keluar dari sesi Akinator`
          m.reply(txt)
        }
        break;
    }
  }
};
handler.menugame = ["akinator"];
handler.tagsgame = ["game"];
handler.command = ["akinator"];

export default handler;
