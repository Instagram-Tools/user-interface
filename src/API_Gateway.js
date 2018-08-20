const API_URL = 'http://localhost:8000';
export default class API_Gateway {
  static async get(userName) {
    let url = API_URL + '/?user=' + userName;
    let response = await fetch(url);
    return this.parsResponse(response);
  }

  static async put(data) {
    // console.log('data:', data);

    let response = await fetch(API_URL, {
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
    else return new Error(text);
  }

  static async register(email, password) {
    let url = API_URL + '/register';
    let response = await fetch(url);
    let text = await this.parsResponse(response);

    return this.extractToken(text);
  }

  static extractToken(text) {
    return new DOMParser()
      .parseFromString(text, 'text/html')
      .getElementById('csrf_token').value;
  }

  static async login(email, password) {
    let response = await fetch(API_URL + '/reg', {
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
}
