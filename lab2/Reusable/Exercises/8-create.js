'use strict';

const createUser = (name, city) => {
  const user = { name, city };
  return user;
};

//const user = createUser('Yuuki Sakuna', 'Tokyo');
module.exports = { createUser };
//console.log(user)
