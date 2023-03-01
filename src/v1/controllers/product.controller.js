const prisma = require("../utils/prisma");

exports.create = (req, res) => {
  const { product_name, product_price, product_img, product_desc } = req.body;
  prisma.product.create({
    data: {
      product_name: product_name,
      product_price: product_price,
      product_img: product_img,
      product_desc: product_desc,
    },
  })
    .then((data) => {
      res.status(201).json({
        message: "Product created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

exports.showAll = (req, res) => {
  prisma.product.findMany()
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({
          message: "Product not found!",
        });
      } else {
        res.status(200).json({
          message: "Product fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Product.",
      });
    });
};

exports.showById = (req, res) => {
  const { id } = req.params;
  prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Product not found!",
        });
      } else {
        res.status(200).json({
          message: "Product fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Product.",
      });
    });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { product_name, product_price, product_img, product_desc } = req.body;
  prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      product_name: product_name,
      product_price: product_price,
      product_img: product_img,
      product_desc: product_desc,
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Product not found!",
        });
      } else {
        res.status(200).json({
          message: "Product updated successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Product.",
      });
    });
};
exports.delete = (req, res) => {
  const { id } = req.params;
  prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Product not found!",
        });
      } else {
        res.status(200).json({
          message: "Product deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Product.",
      });
    });
};