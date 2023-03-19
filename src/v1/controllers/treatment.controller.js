const prisma = require("../utils/prisma");

exports.create = (req, res) => {
  const { treatment_name, treatment_price, treatment_img, treatment_desc } =
    req.body;
  prisma.treatment
    .create({
      data: {
        treatment_name: treatment_name,
        treatment_price: treatment_price,
        treatment_img: treatment_img,
        treatment_desc: treatment_desc,
      },
    })
    .then((data) => {
      res.status(201).json({
        message: "Treatment created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Treatment.",
      });
    });
};
exports.showAll = (req, res) => {
  prisma.treatment
    .findMany()
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({
          message: "Treatment not found!",
        });
      } else {
        res.status(200).json({
          message: "Treatment fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Treatment.",
      });
    });
};
exports.showById = (req, res) => {
  const { id } = req.params;
  prisma.treatment
    .findUnique({
      where: {
        id: parseInt(id),
      },
    })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Treatment not found!",
        });
      } else {
        res.status(200).json({
          message: "Treatment fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Treatment.",
      });
    });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { treatment_name, treatment_price, treatment_img, treatment_desc } =
    req.body;
  prisma.treatment
    .update({
      where: {
        id:id,
      },
      data: {
        treatment_name: treatment_name,
        treatment_price: treatment_price,
        treatment_img: treatment_img,
        treatment_desc: treatment_desc,
      },
    })
    .then((data) => {
      res.status(200).json({
        message: "Treatment updated successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Treatment.",
      });
    });
};
exports.delete = (req, res) => {
  const { id } = req.params;
  prisma.treatment
    .delete({
      where: {
        id: (id),
      },
    })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Treatment not found!",
        });
      } else {
        res.status(200).json({
          message: "Treatment deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Treatment.",
      });
    });
};
