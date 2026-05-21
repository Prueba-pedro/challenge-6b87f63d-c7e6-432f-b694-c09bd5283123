const exampleUtil = require('../utils/exampleUtil');

const fetchData = async () => {
  return exampleUtil.generateData();
};

module.exports = { fetchData };