const express = require("express");
const router = express.Router();
const copy = require("../models/SignUpModel");
const bcrypt = require("bcrypt");

router.post("/SignUp", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);

  const signedUpUser = new copy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
