import console from './Log';
import env from './Env';
import { unsavedState } from './Context';

const API_URL = env.API_URL || document.location.origin + '/api';
export default class API_Gateway {
  static async get(email, e_password, username = '') {
    let url =
      API_URL +
      `/?email=${email}&e_password=${e_password}&username=${username}`;
    let response = await fetch(url);
    return await response.json();
  }

  static async put(data) {
    console.log('data:', data);

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
    let response = await fetch(API_URL + '/register/', {
      method: 'PUT',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await response.text();
    return response.status === 200;
  }

  static extractToken(text) {
    return new DOMParser()
      .parseFromString(text, 'text/html')
      .getElementById('csrf_token').value;
  }

  static async login(email, password) {
    let response = await fetch(API_URL + '/reg/', {
      method: 'PUT',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this.parsResponse(response);
  }

  static async fetchJSON(url) {
    let response = await fetch(url);
    let text = await this.parsResponse(response);
    let json = JSON.parse(text);
    return json;
  }

  static data_to_save(context) {
    let settings = { ...context.state };
    let {
      bot_on,
      email,
      e_password,
      password,
      username,
      subscription,
      timetable
    } = settings;
    let data = undefined;

    if (!(email && e_password)) {
      context.setState({ registrationStep: 1 });
    } else if (!(password && username)) {
      context.setState({ registrationStep: 2 });
    } else if (!subscription) {
      context.setState({ registrationStep: 3 });
    } else {
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

      data = {
        bot_on,
        email,
        username,
        password,
        subscription,
        settings: JSON.stringify(settings),
        timetable
      };

      console.log('Data to save:', data);
    }
    return data;
  }
}
