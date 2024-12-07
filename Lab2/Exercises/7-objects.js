'use strict';

const fn = () => {
  const constObj = { name: 'Aqua' };
  let letObj = { name: 'Yuuki' };
  constObj.name = 'Minato';
  letObj.name = 'Sakuna';

  /*try {
    constObj = { name: 'New Aqua' };
  } catch (error) {
    console.error(error.message);
  }*/

  letObj = { name: 'New Yuuki' };
};

module.exports = { fn };
