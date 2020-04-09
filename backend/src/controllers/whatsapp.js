const fs = require('fs');
const sulla = require('sulla-hotfix');

sulla.ev.on('qr.**', async (qrcode, sessionId) => {
  console.log('change!');
  const imageBuffer = Buffer.from(qrcode.replace('data:image/png;base64,',''), 'base64');
  fs.writeFileSync(`${process.cwd()}/public/qrcode/${sessionId?sessionId:'qrcode'}.png`, imageBuffer);
});
let sessions = [];


module.exports = {
  init: async (req, res) => {
    const {session} = req.header;
    await res.json({loading: true});
    const page = await sulla.create(session, {headless: false, autoRefresh: true});
    await page.page.goto('https://web.whatsapp.com/send?phone=6285229302095');
    console.log('success');
  }
};