require("dotenv").config();
const prisma = require("../utils/prisma");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { username, password } = req.body;
  prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  })
    .then((data) => {
      res.status(201).json({
        message: "User created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User.",
      });
    }
  );
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  prisma.user.findUnique({
    where: {
      username: username,
    },
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with username " + username,
        });
      } else {
        if (password == data.password) {
          return res.status(200).json({
            message: "Login successfully!",
            data: data,
            token: jwt.sign({ id: data.id }, process.env.SECRET, { expiresIn: '1h' })
          });
        } else {
          return res.status(401).json({
            message: "Wrong password!",
          });
        }
      }
    });
};