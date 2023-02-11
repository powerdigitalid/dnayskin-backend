const bcrypt = require('bcryptjs');
const saltRounds = 10;

const passwordGen = (password = '') => {
  return bcrypt.hashSync(password, saltRounds);
}

const passwordCompare = (password = '', hash = '') => {
  return bcrypt.compareSync(password, hash);
}

module.exports = {passwordGen , passwordCompare};
