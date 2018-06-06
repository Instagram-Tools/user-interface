export default class API_Gateway {
  static async get(userName) {
    let url = 'localhost/api/?user=' + userName;
    console.log(url);
    try {
      let response = await fetch(url);
      return await response.text();
    } catch (e) {
      return e.message;
    }
  }
}
