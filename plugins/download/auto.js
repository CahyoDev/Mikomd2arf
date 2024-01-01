import db from "../../lib/database.js"
import { tiktok } from "../../lib/tiktok.js"
import fetch from "node-fetch"

/*
export async function before (m) {
  let budy = typeof m.text == "string" ? m.text : "";
  let extract = budy ? generateLink(budy) : null;
  if (extract && !m.isCommand) {
    if (db.data.chats[m.chat].autodl && !m.isBaileys) {
      let regexTik = /^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/;
      let regexIg = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/;
      let regexYt = /^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
      
      let instagramDL = extract.filter((v) => igFix(v).match(regexIg));
      let tiktokDL = extract.filter((v) => ttFix(v).match(regexTik));
      let youtubeDL = extract.filter((v) => v.match(regexYt));
      
      if (tiktokDL != 0) {
        tiktokDL.map(async (url) => {
          await tiktok(url).then(async (v) => {
            let capt = `*乂 T I K T O K - D O W N L O A D E R*\n\n     *◦ Caption :* ${v.title}\n     *◦ ID :* ${v.id}\n     *◦ Name :* ${v.author.nickname}\n     *◦ Unique ID :* ${v.author.unique_id}\n\n${author}`;
            this.sendFile(m.chat, v.video.noWatermark, "", capt, m); 
          });
        });
      }

      /*if (instagramDL != 0) {
        instagramDL.map(async (url) => {
          try {
            await instagramGetUrl(url).then((res) => {
              for (let i of res.url_list) {
                this.sendFile(m.chat, i, "ig.mp4", "🍟 Fetching : " + fetching, m);
              }
            });
          } catch (e) {
            m.reply("*🚩 Gagal mengunduh media.*");
            throw e;
          }
        });
      }

      if (youtubeDL != 0) {
        youtubeDL.map(async (url) => {
          await youtubedlv2(url).then(async (v) => {
            let vid = await v.video["360p"];
            this.sendFile(m.chat, await vid.download(), "", `*乂 Y O U T U B E - V I D E O*\n\n   *◦ Title :* ${v.title}\n   *◦ Quality :* ${vid.quality}\n   *◦ Size :* ${vid.size}`, m);
          });
        });
      }
    }
  }
  return true;
};
*/
function generateLink(text) {
  let regex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
  return text.match(regex);
}

function ttFix(url) {
  if (!url.match(/(tiktok.com\/t\/)/g)) return url;
  let id = url.split("/t/")[1];
  return "https://vm.tiktok.com/" + id;
}

function igFix(url) {
  let count = url.split("/");
  if (count.length == 7) {
    let username = count[3];
    let destruct = this.removeItem(count, username);
    return destruct.map((v) => v).join("/");
  } else return url;
}