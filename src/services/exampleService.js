const exampleModel = require('../models/exampleModel');

const getData = async () => {
  return await exampleModel.fetchData();
};

module.exports = { getData };