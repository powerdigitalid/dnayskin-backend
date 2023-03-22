const prisma = require('../utils/prisma');

exports.create = (req, res) => {
  const { order_detail, order_date, order_desc, order_total, order_payment, anamnesa, diagnosa, terapi, userId, customerId } = req.body;
  prisma.order.create({
    data: {
      order_detail: order_detail,
      order_date: order_date,
      order_desc: order_desc,
      order_total: order_total,
      order_payment: order_payment,
      anamnesa: anamnesa,
      diagnosa: diagnosa,
      terapi: terapi,
      userId: userId,
      customerId: customerId
    }
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'Order created successfully',
      data: data
    });
  }).catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while deleting the Order.",
    });
  });
};
exports.showAll = (req, res) => {
  
  prisma.order.findMany()
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: 'Order fetched successfully!',
        data: data
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Order.",
      });
    });
};
exports.showById = (req, res) => {
  const { id } = req.params;
  prisma.order.findUnique({
    where: {
      id: id
    }
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'Order fetched successfully!',
      data: data
    });
  }).catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while fetching the Order.",
    });
  });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { order_detail, order_date, order_desc, order_total, order_payment, anamnesa, diagnosa, terapi, userId, customerId } = req.body;
  prisma.order.update({
    where: {
      id: id
    },
    data: {
      order_detail: order_detail,
      order_date: order_date,
      order_desc: order_desc,
      order_total: order_total,
      order_payment: order_payment,
      anamnesa: anamnesa,
      diagnosa: diagnosa,
      terapi: terapi,
      userId: userId,
      customerId: customerId
    }
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'Order updated successfully!',
      data: data
    });
  }).catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating the Order.",
    });
  });
};
exports.delete = (req, res) => {
  const { id } = req.params;
  prisma.order.delete({
    where: {
      id: id
    }
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'Order deleted successfully!',
      data: data
    });
  }).catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while deleting the Order.",
    });
  });
};