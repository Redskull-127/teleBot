// src/index.js

const someHost = 'https://damp-snow-64cb.meertarbani.workers.dev/';
const url = someHost + '/src/data';


var src_default = {
  async fetch(request, env) {
    return await handleRequest(request);
  }
};
async function handleRequest(request) {
  if (request.method === "POST") {
    const payload = await request.json();
    if ("message" in payload) {
      const chatId = payload.message.chat.id;
      let url = `https://api.telegram.org/bot5744317137:AAG5ZKqGQXLnZLxcd-kkQzCrZhlP0XuPmMU/sendMessage?chat_id=${chatId}&text=`;
      if (payload.message.text === "/start") {
        const text = `Welcome ${payload.message.chat.username}, 
 Enter/Paste YouTube or Spotify link to download!`;
        const data = await fetch(url + text).then((resp) => resp.json());
      }
      if (payload.message.text.substring(0, 24) === "https://www.youtube.com/" || payload.message.text.substring(0, 19) === "https://youtube.com" || payload.message.text.substring(0, 11) === `https://you`) {
        const text = `Open the link below for downloading 
 https://convert2mp3s.com/api/widgetv2?url=${payload.message.text} 
. 
. 
. 
 Made with \u2764\uFE0F by Meer Tarbani`;
        const data = await fetch(url + text).then((resp) => resp.json());
      }
      if (payload.message.text.substring(0, 25) === "https://open.spotify.com/") {
        const text = `coming soon`;
        const data = await fetch(url + text).then((resp) => resp.json());
      }
      if (payload.message.text === "/help") {
        const text = `In case you need help, contact raise a query using /query command`;
        const data = await fetch(url + text).then((resp) => resp.json());
      }
      if (payload.message.text === "/qeury") {
        const text = `We are here to help you. Please describe your query in detail.`;
        const data = await fetch(url + text).then((resp) => resp.json());
        const text2 = `looks like this is not working. Please contact redskull@duck.com`;
        const data2 = await fetch(url + text2).then((resp) => resp.json());
      }
    }
  }
  return new Response(`https://t.me/meertarbanibot`);
}
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
