let env = process.env;
try {
  env = require('./.env.json');
} catch (e) {
  console.error(e);
  env = process.env;
}

export default env;
