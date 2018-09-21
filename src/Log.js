export default class Log {
  static isEnabled() {
    return process.env.NODE_ENV === 'development';
  }

  static log() {
    if (this.isEnabled())
      switch (arguments.length) {
        case 1:
          return console.log(arguments[0]);
        case 2:
          return console.log(arguments[0], arguments[1]);
        case 3:
          return console.log(arguments[0], arguments[1], arguments[2]);
        case 4:
          return console.log(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3]
          );
        case 5:
          return console.log(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3],
            arguments[4]
          );
        default:
          return console.log(arguments);
      }
  }

  static error() {
    if (this.isEnabled())
      switch (arguments.length) {
        case 1:
          return console.error(arguments[0]);
        case 2:
          return console.error(arguments[0], arguments[1]);
        case 3:
          return console.error(arguments[0], arguments[1], arguments[2]);
        case 4:
          return console.error(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3]
          );
        case 5:
          return console.error(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3],
            arguments[4]
          );
        default:
          return console.error(arguments);
      }
  }
}

Log.log('process.env.NODE_ENV:', process.env.NODE_ENV);
