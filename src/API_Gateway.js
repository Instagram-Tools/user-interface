import console from './Log';
import env from './Env';
import { unsavedState } from './Context';

const API_URL = env.API_URL || document.location.origin + '/api';
export default class API_Gateway {
  static async get(email, e_password, username = '') {
    let url =
      API_URL +
      `/?email=${email.toLowerCase()}&e_password=${e_password}&username=${username}`;
    let response = await fetch(url);
    if ((await response.status) === 200) return response;

    return await fetch(url);
  }

  static async put(data) {
    let response = await fetch(API_URL + '/', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this.parsResponse(response);
  }

  static async parsResponse(response) {
    let text = await response.text();
    if (response.status === 200) return text;
    else throw new Error(text);
  }

  static async register(email, password) {
    let init = {
      method: 'PUT',
      body: JSON.stringify({ email: email.toLowerCase(), password }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      let response = await fetch(API_URL + '/register/', init);
      if ((await response.status) === 200) {
        return response.status;
      } else {
        throw Error('response.status !== 200');
      }
    } catch (e) {
      console.error('Error in register()', e);
      let response = await fetch(API_URL + '/register/', init);
      await response.text();
      return response.status;
    }
  }

  static extractToken(text) {
    return new DOMParser()
      .parseFromString(text, 'text/html')
      .getElementById('csrf_token').value;
  }

  static async fetchJSON(url) {
    let response = await fetch(url);
    let text = await this.parsResponse(response);
    let json = JSON.parse(text);
    return json;
  }

  static data_to_save(data = {}) {
    console.log('Settings to save:', data);
    let settings = { ...data };
    let {
      bot_on,
      email,
      e_password,
      password,
      username,
      subscription,
      timetable
    } = settings;

    for (let prop in unsavedState) {
      delete settings[prop];
    }

    delete settings.bot_on;
    delete settings.password;
    delete settings.username;
    delete settings.email;
    delete settings.e_password;
    delete settings.timetable;
    delete settings.subscription;

    return {
      bot_on,
      email: email.toLowerCase(),
      e_password,
      username: username.toLowerCase(),
      password,
      subscription,
      settings: JSON.stringify(settings),
      timetable
    };
  }
}
