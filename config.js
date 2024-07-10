const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_14_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5VSjVZRTYrRWk1Z3BGbWgrd3dTZVdSUklIMkhPaVU5OGRSbDRvMldaaUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVKMk8yZFZFUklxYklyZWZramZoVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjk1NDNmYjAtM2ZhYS00ZDUxLWI4YTAtYjVkNmI5OTlhNmIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDQ1LFxuICAgICAgMTg2LFxuICAgICAgMjksXG4gICAgICAxMjUsXG4gICAgICA5OSxcbiAgICAgIDE1LFxuICAgICAgMjM4LFxuICAgICAgMTIsXG4gICAgICAyMDMsXG4gICAgICAxOTQsXG4gICAgICAxODgsXG4gICAgICAzNyxcbiAgICAgIDIwLFxuICAgICAgMTQzLFxuICAgICAgMTY1LFxuICAgICAgMjIxLFxuICAgICAgMTI1LFxuICAgICAgMTE0LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDI0MyxcbiAgICAgIDEsXG4gICAgICA5NixcbiAgICAgIDg5LFxuICAgICAgMjA1LFxuICAgICAgMjE0LFxuICAgICAgMjEzLFxuICAgICAgOCxcbiAgICAgIDIwNCxcbiAgICAgIDAsXG4gICAgICAyMTUsXG4gICAgICAzOSxcbiAgICAgIDI0OSxcbiAgICAgIDg3LFxuICAgICAgMTQ5LFxuICAgICAgNTUsXG4gICAgICAyNSxcbiAgICAgIDgzLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dmMDZFSkVQV2t0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5ZGQ5ZkdzTnRTbXdwbkVWMytKRlhNeE45MUNJd1lIOUlJdXBXYzBsV1NNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJmUDgwRUgvL0dMSGdqSU9NeFlCd0JzTkVyMElKZUtyTmx6NFBHeDdCY2JLeEdoNGJhMGZpS3M4NEc1UVI0ZUM0ZlZIWlIrSk93OWppTXIyT05Dd2hRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm91MnlJdnB6TUJTbTJJUkl6Z3FCbkJuU3VRazdoeDZDV2lyZU5TTjZUaVZ2RUtWWnRUZDJGZUFvcERmMTAvbFVpZkFLNFR5dlhZTDZkaXhrWWNNQ0N3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzM3NTE1MDIwOTc6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMzQ2NDQ3MTYwNTQ4OTozNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjMzNzUxNTAyMDk3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NzA0ODdcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
