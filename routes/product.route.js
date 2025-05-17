import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { body, param } from "express-validator";

const router = express.Router();

router.get("/", getProducts);

router.get(
  "/:id",
  param("id").isMongoId().withMessage("Invalid product id "),
  getProduct
);

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Please enter the product name"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("quantity")
      .notEmpty()
      .withMessage("Quantity is required")
      .isInt({ min: 1 })
      .withMessage("Quantity must be atleast 1"),
  ],
  createProduct
);

router.put(
  "/:id",
  [
    param("id").isMongoId().withMessage("Invalid product id "),
    body("name")
      .optional()
      .notEmpty()
      .withMessage("Please ener the product name"),
    body("price").optional().isNumeric().withMessage("Price must be a number"),
    body("quantity")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Quantity must be atleast 1")
      
  ],
  updateProduct
);
router.delete(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid Product id")],
  deleteProduct
);

export default router;
