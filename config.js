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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_29_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRhRDRSVFg4ZUVnbmNFcG5iOWNRNWpRdTh4aWVDbXlHTm4ycU5pVFhBeGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFaRWI2YnZZVFBLQmpJVnItbXBDRVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWNjZjkyMmUtYzE0MC00Y2Q0LWJhNjYtZjViZTZiMmMwZmVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMjA3LFxuICAgICAgNCxcbiAgICAgIDIyMCxcbiAgICAgIDE2MyxcbiAgICAgIDIwOSxcbiAgICAgIDE2OSxcbiAgICAgIDIyMCxcbiAgICAgIDE0OCxcbiAgICAgIDksXG4gICAgICA0OCxcbiAgICAgIDk1LFxuICAgICAgMjgsXG4gICAgICA0NyxcbiAgICAgIDIwMCxcbiAgICAgIDM0LFxuICAgICAgMjAyLFxuICAgICAgODEsXG4gICAgICA2NixcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNixcbiAgICAgIDg1LFxuICAgICAgMjEzLFxuICAgICAgODMsXG4gICAgICAyMTMsXG4gICAgICAxMTMsXG4gICAgICAxMixcbiAgICAgIDExNSxcbiAgICAgIDMsXG4gICAgICA0NyxcbiAgICAgIDUxLFxuICAgICAgMSxcbiAgICAgIDE4NyxcbiAgICAgIDgsXG4gICAgICAxOTYsXG4gICAgICAxNjgsXG4gICAgICAzOSxcbiAgICAgIDU2LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjJSNlpONkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM3MDU2MzY3OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjA0ODE2ODc5NTc3NTg6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG01cFhrUTlveUh0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVNmJiWVpJMzZaM3d6djh3K3J4ZXZMMlFCSVhxYmpFWUpxeEpYWkpuYUE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZvbjNuSjRwbi9TUkVpYzIwWXpqRFRzc1EydDdUTkN4NHNrd2poa2Vtemg3UHBLOWNVTEpoZ3lsSytBWDdQYmxxRzFpcU1GcjU0Uk0vSW5sOVhKakRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdGdU5wQmNRNEUwLzNMUTl2NWhTMG1IVXYyd1pFZVdZazlEbDNwcElQRDU4VC9RQmhod3FBR3ZlK0g3MFoySVdSNUpXSkgxSnNBQ0J3M3U3SG4vdENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM3MDU2MzY3OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg3ODEzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZWeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlZ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSFB5MHRxbFdnS3BKYUtNYW5sMGw3enRUeGxrdzZmelBKMS9HOXRYRk00bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQzNjkwMTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTg3ODE0MzExNlwifSIKfQ=="  // PUT your SESSION_ID 


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
