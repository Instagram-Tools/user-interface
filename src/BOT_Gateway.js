import env from './Env';

const BOT_URL = env.BOT_URL || document.location.origin + '/bot';
export default class BOT_Gateway {
  static async fetchText(url) {
    try {
      let response = await fetch(BOT_URL + url);
      let text = await response.text();
      if (response.status === 200) return text;
      else return new Error(text);
    } catch (e) {
      return e;
    }
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
