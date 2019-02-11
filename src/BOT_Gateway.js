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
    let response = await fetch(BOT_URL + `/${username}`);
    let status = response.json();

    console.log('isBotRunning', status);

    return status.is_running === true;
  }

  static async stopBot(username) {
    return await this.fetchText(`/stop/${username}`);
  }

  static async startBot(username) {
    return await this.fetchText(`/start/${username}`);
  }
}
