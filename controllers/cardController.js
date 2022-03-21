const { Card } = require("../models");
const { Column } = require("../models");

exports.createCard = async (req, res) => {
  try {
    const data = await Card.create({
      ...req.body,
      ordering: 0,
    });
    if (data) {
      res.json({
        status: "success",
        data,
      });
    } else {
      throw new Error("No Card Created");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
exports.getAllCards = async (req, res) => {
  try {
    const data = await Card.findAll({});
    if (data.length) {
      res.json({
        status: "success",
        message: "Card found Successfully",
        data,
      });
    } else {
      throw new Error("No Card Found");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getCard = async (req, res) => {
  try {
    const data = await Card.findOne({ where: { id: req.params.id } });
    if (data) {
      res.json({
        status: "success",
        message: "Card found Successfully",
        data,
      });
    } else {
      throw new Error("No Card Found");
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
exports.removeCard = async (req, res) => {
  try {
    const data = await Column.findAll({ where: { id: req.params.id } });
    if (data) {
      await Card.destroy({ where: { id: req.params.id } });
      res.json({
        status: "success",
        message: "Card deleted Successfully",
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
exports.updateCard = async (req, res) => {
  try {
    const data = await Card.findOne({ where: { id: req.params.id } });
    if (data) {
      await Card.update({ ...req.body }, { where: { id: req.params.id } });
      res.json({
        status: "success",
        message: "Card Updated Successfully",
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
