const prisma = require("../utils/prisma");

exports.show = async (req, res) => {
  const { type } = req.params;
  try {
    const customerCount = await prisma.customer.count();
    const productCount = await prisma.product.count();
    const treatmentCount = await prisma.treatment.count();
    const currentReservations = await prisma.reservation.count({
      where: {
        reservation_status: "pending",
      },
    });
    switch (type) {
      case "all":
        res.status(200).json({
          message: "Dashboard counter data fetched successfully!",
          data: { customerCount, productCount, treatmentCount, currentReservations },
        });
        break;

      case "customer":
        res.status(200).json({
          message: "Dashboard counter data fetched successfully!",
          data: { customerCount },
        });
        break;

      case "product":
        res.status(200).json({
          message: "Dashboard counter data fetched successfully!",
          data: { productCount },
        });
        break;
      
      case "treatment":
        res.status(200).json({
          message: "Dashboard counter data fetched successfully!",
          data: { treatmentCount },
        });
        break;

      case "reservation":
        res.status(200).json({
          message: "Dashboard counter data fetched successfully!",
          data: { currentReservations },
        });
        break;

      default:
        res.status(404).send({
          message: "No counter type found!",
        });
        break;
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while fetching the Dashboard counter data.",
    });
  }
};