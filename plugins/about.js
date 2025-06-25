/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭┈───────────────•*

*𝗁𝗂 𝖽𝖾𝖺𝗋 👋 ${pushname}*

╭┈───────────────•*
*│  ◦* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ: ᴍᴜʟʟᴇʀ 🇳🇬*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ꜱꜰᴛ*
*│  ◦* *ɴɪᴄᴋɴᴀᴍᴇ➠ ᴍᴜʟʟᴇʀᴛᴇᴄʜ*
*│  ◦* *ᴀɢᴇ➠ ❌*
*│  ◦* *ᴄɪᴛʏ➠ ʟᴀɢᴏꜱ*
*│  ◦* *ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅᴇᴠ
*╰┈───────────────•*

*[ • ᴍᴜʟʟᴇʀ ᴍᴅ - ᴘʀᴏᴊᴇᴄᴛ • ]*

*╭┈───────────────•*
*│  ◦* *▢➠ᴍᴜʟʟᴇʀ🇳🇬*
*│  ◦* *▢➠ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*

*•────────────•⟢*
> © 𝕻𝕺𝖂𝕰𝕽𝕰𝕯 𝕭𝖄 𝕸𝖀𝕷𝕷𝕰𝕽
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
