// routes/productRoutes.js
import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct
} from "../controllers/productController.js";

const ProductRouter = express.Router();

ProductRouter.post("/products", createProduct);
ProductRouter.get("/allproducts", getAllProducts);
ProductRouter.get("/products/:id", getProductById);
ProductRouter.delete("/delete/:id", deleteProduct);

export default ProductRouter;
