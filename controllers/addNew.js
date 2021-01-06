const Company = require("../model/company");

exports.addCompany = (req, res, next) => {
  const company = new Company({
    name: req.body.name,
    country: req.body.country,
  });
  company
    .save()
    .then((result) => {
      console.log("Company data saved to the database.");
    })
    .catch((err) => {
      console.log("Error storing company data to the database");
      console.log("Err " + err);
    });
  next();
};
