const Companies = require("../model/company");

exports.getCompanies = (req, res, next) => {
  Companies.find()
    .then((companies) => {
      res.json({ data: companies });
    })
    .catch((err) => {
      console.log(err);
    });
};
