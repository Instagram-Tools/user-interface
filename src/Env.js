let env = process.env;
if (process.env.NODE_ENV !== 'production') {
  env = require('./.env.json');
}

export default env;
