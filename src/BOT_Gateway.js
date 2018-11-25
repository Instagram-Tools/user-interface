import console from './Log';
import env from './Env';

const BOT_URL = env.BOT_URL || document.location.origin + '/bot';
export default class BOT_Gateway {
  static async fetchText(url) {
    console.log(url);
    let response = await fetch(BOT_URL + url);
    let text = await response.text();
    if (response.status === 200) return text;
    else return new Error(text);
  }

  static async isBotRunning(username) {
    let text = await this.fetchText(`/${username}`);
    return text === 'True';
  }

  static async stopBot(username) {
    return await this.fetchText(`/stop/${username}`);
  }

  static async startBot(username) {
    return await this.fetchText(`/start/${username}`);
  }
}
