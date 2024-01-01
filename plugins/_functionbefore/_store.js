import db from "../../lib/database.js";

const _db = db.data.datas.store 

export async function before(m) {
	if (!m.isGroup) return !1
	if (already(_db, m.text)) {
		const teks = await getResponse(_db, m.text)
		m.reply(teks)
	}
	return !0
}

function already(arr, key) {
  return arr.some(item => item.key === key);
}

function getResponse(arr, key) {
  const item = arr.find(item => item.key === key);
  return item ? item.response : null;
}

function sendResponse(arr, key) {
	const item = arr.find(item => item.key === key)
	return item ? item.response : null;
}