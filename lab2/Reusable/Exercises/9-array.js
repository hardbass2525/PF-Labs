'use strict';

const phonebook = [
  { name: 'Minato Aqua', phone: '+81-880-594-4856' },
  { name: 'Yuuki Sakuna', phone: '+81-357-060-8651' },
  { name: 'Murasaki Shion', phone: '+81-539-354-2041' },
  { name: 'Shirakami Fubuki', phone: '+81-320-561-8501' }
];

const findPhoneByName = (name) => {
  for (const person of phonebook)
    if (person.name === name) return person.phone;
};

module.exports = { phonebook, findPhoneByName };
