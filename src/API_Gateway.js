const API_URL = 'http://localhost:50/';
export default class API_Gateway {
  static async get(userName) {
    let url = API_URL + '?user=' + userName;
    console.log(url);
    try {
      let response = await fetch(url);
      return await response.text();
    } catch (e) {
      return e.message;
    }
  }

  static async put(user, timetable) {
    try {
      let response = await fetch(API_URL);
      return await response.text();
    } catch (e) {
      return e.message;
    }
  }
}
