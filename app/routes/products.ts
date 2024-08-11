import { Router } from "express";
import ProductsController from "../controllers/products";

const Products = Router();

Products.get("/", ProductsController.handleGetProducts);

export default Products;
