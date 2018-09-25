let env = process.env;
try {
  if (process.env === 'development') env = require('./.dev.json');
  else env = require('./.env.json');
} catch (e) {
  console.error(e);
  env = process.env;
}

export default env;
