export default class Log {
  isEnabled() {
    return process.env.NODE_ENV === 'development';
  }

  log(message, ...optionalParams) {
    if (this.isEnabled()) console.log(message, optionalParams);
  }

  error(message, ...optionalParams) {
    if (this.isEnabled()) console.error(message, optionalParams);
  }
}

new Log().log('process.env.NODE_ENV:', process.env.NODE_ENV);
