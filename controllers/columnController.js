const { Column } = require("../models");
const { Card } = require("../models");

exports.createColumn = async (req, res) => {
  try {
    const data = await Column.create({
      ...req.body,
    });
    if (data) {
      res.json({
        status: "success",
        data,
      });
    } else {
      throw new Error("No Column Created");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getColumn = async (req, res) => {
  try {
    console.log("req.params.id", req.params.id);
    const data = await Column.findAll({ where: { id: req.params.id } });
    if (data) {
      res.json({
        status: "success",
        message: "Column found Successfully",
        data,
      });
    } else {
      throw new Error("No Column Found");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.removeColumn = async (req, res) => {
  try {
    const data = await Column.findOne({ where: { id: req.params.id } });
    if (data) {
      await Column.destroy({ where: { id: req.params.id } });
      res.json({
        status: "success",
        message: "Column deleted Successfully",
      });
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Column.findAll({
      include: [
        {
          model: Card,
          as: "cards",
          separate: true,
          order: [["ordering", "ASC"]],
        },
      ],
    });
    if (data.length) {
      res.json({
        status: "success",
        message: "All Columns Found",
        data,
      });
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.updateColumn = async (req, res) => {
  try {
    const data = await Column.findOne({ where: { id: req.params.id } });
    if (data) {
      await Column.update({ ...req.body }, { where: { id: req.params.id } });
      res.json({
        status: "success",
        message: "Column Updated Successfully",
      });
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    res.json({
      status: "success",
      message: error.message,
    });
  }
};

exports.updateColumnArrangements = async (req, res) => {
  try {
    const columnId = req.body.columnId;
    const cardIds = req.body.cardIds;
    let success = "";

    const result = cardIds.map((element, index) => {
      console.log("index", index);
      console.log("element", element);

      return Card.update(
        { ordering: index + 1, column_id: columnId },
        {
          where: { id: element },
        }
      ).then((result) => {
        success = "success";
      });
    });
    await Promise.all(result).then(() => {
      res.json({
        success: success,
        message: "updated successfully",
      });
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
