const prisma = require("../utils/prisma");

exports.create = (req, res) => {
  const { reservation_date, reservation_time, reservation_note, reservation_status, user_id, customer_id } = req.body;
  prisma.reservation.create({
    data: {
      reservation_date: reservation_date,
      reservation_time: reservation_time,
      reservation_note: reservation_note,
      reservation_status: reservation_status,
      userId: user_id,
      customerId: customer_id,
    },
  })
    .then((data) => {
      res.status(201).json({
        message: "Reservation created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reservation.",
      });
    });
};
exports.showAll = (req, res) => {
  prisma.reservation.findMany()
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({
          message: "Reservation not found!",
        });
      } else {
        res.status(200).json({
          message: "Reservation fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Reservation.",
      });
    });
};
exports.showById = (req, res) => {
  const { id } = req.params;
  prisma.reservation.findUnique({
    where: {
      id: id,
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Reservation not found!",
        });
      } else {
        res.status(200).json({
          message: "Reservation fetched successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Reservation.",
      });
    });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { reservation_date, reservation_time, reservation_note, reservation_status, user_id, customer_id } = req.body;
  prisma.reservation.update({
    where: {
      id: id,
    },
    data: {
      reservation_date: reservation_date,
      reservation_time: reservation_time,
      reservation_note: reservation_note,
      reservation_status: reservation_status,
      userId: user_id,
      customerId: customer_id,
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Reservation not found!",
        });
      } else {
        res.status(200).json({
          message: "Reservation updated successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Reservation.",
      });
    });
};
exports.delete = (req, res) => {
  const { id } = req.params;
  prisma.reservation.delete({
    where: {
      id: id,
    },
  })
    .then((data) => {
      if (data === null) {
        res.status(404).json({
          message: "Reservation not found!",
        });
      } else {
        res.status(200).json({
          message: "Reservation deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Reservation.",
      });
    });
};