const prisma = require("../utils/prisma");

exports.create = (req, res) => {
  const { cust_name, cust_phone, cust_address, cust_img } = req.body;
  prisma.customer.create({
    data: {
      cust_name: cust_name,
      cust_phone: cust_phone,
      cust_address: cust_address,
      cust_img: cust_img,
    },
  })
    .then((data) => {
      res.status(201).json({
        message: "Customer created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    }
  );
};
exports.showAll = (req, res) => {
  prisma.customer.findMany()
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({
          message: "Customer not found!",
        });
      } else {
        res.status(200).json({
          message: "Customer fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Customer.",
      });
    }
  );
};
exports.showById = (req, res) => {
  const { id } = req.params;
  prisma.customer.findUnique({
    where: {
      id: id,
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Customer not found!",
        });
      } else {
        res.status(200).json({
          message: "Customer fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Customer.",
      });
    }
  );
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { cust_name, cust_phone, cust_address, cust_img } = req.body;
  prisma.customer.update({
    where: {
      id: id,
    },
    data: {
      cust_name: cust_name,
      cust_phone: cust_phone,
      cust_address: cust_address,
      cust_img: cust_img,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Customer updated successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Customer.",
      });
    }
  );
};
exports.delete = (req, res) => {
  const { id } = req.params;
  prisma.customer.delete({
    where: {
      id: id,
    },
  })
    .then((data) => {
      res.status(204).json({
        message: "Customer deleted successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Customer.",
      });
    }
  );
};