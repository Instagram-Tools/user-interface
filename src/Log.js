export default class Log {
  static isEnabled() {
    return process.env.NODE_ENV === 'development';
  }

  static log(message, ...optionalParams) {
    if (this.isEnabled()) console.log(message, optionalParams);
  }

  static error(message, ...optionalParams) {
    if (this.isEnabled()) console.error(message, optionalParams);
  }
}

Log.log('process.env.NODE_ENV:', process.env.NODE_ENV);
