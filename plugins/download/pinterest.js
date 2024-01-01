import cheerio from "cheerio";
import fetch from "node-fetch";
import { lookup } from "mime-types";
import { URL_REGEX } from "@whiskeysockets/baileys";

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
	if (!isOwner) return 
	text = text.endsWith("SMH") ? text.replace("SMH", "") : text;
	if (!text) throw "Input Query / Pinterest Url";
	try {
		let res = await pinterest(text);
		let mime = await lookup(res);
		text.match(URL_REGEX) ? await conn.sendMessage(m.chat, { [mime.split("/")[0]]: { url: res }, caption: `Succes Download: ${await shortUrl(res)}` }, { quoted: m }) : await conn.sendFile(m.chat, res, "pin.jpg", `乂 P I N T E R E S T - S E A R C H*\n\n*Query From :* ${text.capitalize()}`, m);
    } catch (e) {
    	console.log(e)
    	throw "Not Found / Server Error"
    }	
};
handler.menudownload = ["pinterest|pin"];
handler.tagsdownload = ["search"];
handler.command = /^(pin|pinterest)$/i;

handler.limit = true 
handler.premium = true 

export default handler;

async function pinterest(query) {
  if (query.match(URL_REGEX)) {
    let res = await fetch(`https://savepin.io/frontendService/DownloaderService?url=${query}`) 
    let item = await res.json()
    const mp4Media = item.medias.find(media => media.extension === 'mp4');
    if (mp4Media) {
      return mp4Media.url;
    } else {
      const jpgMedia = item.medias.find(media => media.extension === 'jpg');
      return jpgMedia.url;
    }
  } else {
    let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let json = await res.json();
    let data = json.resource_response.data.results;
    if (!data.length) throw `Query "${query}" not found :/`;
    return data[~~(Math.random() * data.length)].images.orig.url;
  }
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}