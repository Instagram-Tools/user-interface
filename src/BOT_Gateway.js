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
    return true;
    let text = await this.fetchText(`/${username}`);
    return text === 'True';
  }

  static async stopBot(username) {
    return await this.fetchText(`/stop/${username}`);
  }

  static async tryLoginBot({ username, password, email, sec_code }) {
    let data = { username, password, email, sec_code };
    let response = await fetch(BOT_URL + '/login/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let text = await response.text();
    if (response.status === 200) return text;
    else throw new Error(text);
  }

  static async startBot(username) {
    return await this.fetchText(`/start/${username}`);
  }
}
