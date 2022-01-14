const express = require("express");
const asyncHandler = require("express-async-handler");

const { Soda } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const router = express.Router();

const validateSoda = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Soda flavor.")
    .isLength({ min: 3 })
    .withMessage("Soda flavor must be at least 3 characters"),
  handleValidationErrors,
];

// C for CREATE
router.post(
  "/new",
  validateSoda,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { name, body } = req.body;
    const soda = await Soda.create({
      name,
      body: body || "",
      user_id: req.user.id,
    });

    return res.json(soda);
  })
);

// R for READ
router.get(
  '/:id(\\d+)',
  requireAuth,
  asyncHandler(async (req, res) => {
    const soda = await Soda.findByPk(req.params.id);
    return res.json(soda);
  })
);

// GET all sodas
router.get(
  "/",
  requireAuth,
  asyncHandler(async (_req, res) => {
    const sodas = await Soda.findAll();
    return res.json(sodas);
  })
);
// U for UPDATE
router.put(
  "/:id",
  validateSoda,
  requireAuth,
  asyncHandler(async (req, res) => {
    const details = req.body;
    const id = req.params.id;
    delete details.id;
    await Soda.update(details, {
      where: { id },
      returning: true,
      plain: true,
    });
    const updatedSoda = Soda.findByPk(id);
    return res.json(updatedSoda);
  })
);

// D for DELETE
router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const sodaId = await Soda.destroy({ where: { id: req.params.id } });
    return res.json(sodaId);
  })
);

module.exports = router;
