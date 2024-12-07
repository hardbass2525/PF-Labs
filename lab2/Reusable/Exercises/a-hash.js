'use strict';

const phonebook = {
  'Aqua': '+81-880-594-4856',
  'Shion': '+81-539-354-2041',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
