const API_URL = 'http://localhost:50/';
export default class API_Gateway {
  static async get(userName) {
    let url = API_URL + '?user=' + userName;
    console.log(url);
    let response = await fetch(url);
    return this.parsResponse(response);
  }

  static async put(data) {
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
}
