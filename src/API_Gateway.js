const API_URL = 'http://localhost:50/';
export default class API_Gateway {
  static async get(userName) {
    let url = API_URL + '?user=' + userName;
    console.log(url);
    let response = await fetch(url);
    let text = await response.text();
    if (response.status === 200) return text;
    else return Promise.reject(new Error(text));
  }

  static async put(data) {
    let response = await fetch(API_URL, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let text = await response.text();
    if (response.status === 200) return text;
    else return new Error(text);
  }
}
