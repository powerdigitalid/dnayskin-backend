const prisma = require("../utils/prisma");

exports.create = (req, res) => {
  const { img_path } = req.body;
  prisma.banner.create({
    data: {
      image_path: img_path,
    },
  })
    .then((data) => {
      res.status(201).json({
        message: "Banner created successfully!",
        data: data,
      });
    }).catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Banner.",
      });
    }
  );
};
exports.showAll = (req, res) => {
  prisma.banner.findMany()
    .then((data) => {
      res.status(200).json({
        message: "Banner fetched successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the Banner.",
      });
    }
  );
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { img_path } = req.body;
  prisma.banner.update({
    where: {
      id: parseInt(id),
    },
    data: {
      image_path: img_path,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Banner updated successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Banner.",
      });
    }
  );
};
exports.delete = (req, res) => {
  const { id } = req.params;
  prisma.banner.delete({
    where: {
      id: parseInt(id),
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Banner deleted successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Banner.",
      });
    }
  );
};