import { WAMessageStubType } from '@whiskeysockets/baileys'
import Connection from '../../lib/connection.js'
import db from '../../lib/database.js'

const mini = '120363163325995898@g.us'
 
export async function before(m) {
	if (!m.messageStubType || !m.isGroup) return !1
  if (m.chat != '120363025272391108@g.us') return !1
	let edt = `@${m.sender.split`@`[0]}`
	let edtr = (await this.getName(m.sender) || '').replace(/\n/g, '').trim()
	if (m.messageStubType == 21) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _group name changed by ${edtr}_` })
	} else if (m.messageStubType == 22) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _group icon changed by ${edtr}_` })
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _${edtr} reseted link group_` })
	} else if (m.messageStubType == 24) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _${edtr} changed group description_` })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _*${m.messageStubParameters[0] == 'on' ? 'only admin' : 'all member'}* can edit info group_\n*-* by ${edtr}` })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _${edtr} *${m.messageStubParameters[0] == 'on' ? 'close' : 'open'}* the group_` })
	} else if (m.messageStubType == 28) {
		await this.sendMessage(mini, { text: `*[Group Notif]* ${edt} _kicked_ @${m.messageStubParameters[0].split`@`[0]} _from grup_`, mentions: [m.sender, m.messageStubParameters[0]] })
	} else if (m.messageStubType == 29) {
		await this.sendMessage(mini, { text: `*[Group Notif]* ${edt} _promoting_ @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender, m.messageStubParameters[0]] })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(mini, { text: `*[Group Notif]* ${edt} _demoting_ @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender, m.messageStubParameters[0]] })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _${edtr} changed ephemeral duration_` })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(mini, { text: `*[Group Notif]* _ephemeral disabled by ${edtr}_` })
	} else if (m.messageStubType == 32 || m.messageStubType == 27) {
		let add = m.messageStubType == 27 ? true : false
		let user = m.messageStubParameters[0]
		let id = m.chat
		let chat = db.data.chats[id]
		let meta = await Connection.store.fetchGroupMetadata(id, this.groupMetadata)
		let bg = await (await fetch('https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/menus.json')).json().then(v => v.getRandom())
		let name = await this.getName(user)
		let namegc = await this.getName(id)
		let pp = await this.profilePictureUrl(user, 'image').catch(_ => 'https://i.ibb.co/VHXK4kV/avatar-contact.png')
		let ppgc = await this.profilePictureUrl(id, 'image').catch(_ => 'https://i.ibb.co/VHXK4kV/avatar-contact.png')
		let text = (add ? `Welcome @user\n join to *𝑆𝑘𝑦𝐵𝑜𝑡-𝑀𝑑 ⚗️* for playing with bot` : 'Sayonara @user').replace('@user', '@' + user.split('@')[0])
		try {
			const can = await import('knights-canvas')
			pp = await (await (add ? new can.Welcome() : new can.Goodbye()).setUsername(name).setGuildName(namegc).setGuildIcon(ppgc).setMemberCount(meta.participants.length).setAvatar(pp).setBackground(bg).toAttachment()).toBuffer()
			await this.sendMessage(mini, { image: pp, caption: text, mentions: [user] })
		} catch (e) {
			console.log(e)
			await this.sendMessage(mini, { text: text, mentions: [user] })
		}
	}
}

export const disabled = false