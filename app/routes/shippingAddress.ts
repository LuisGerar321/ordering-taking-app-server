import { Router } from "express";
import ShippingAddressesController from "../controllers/shippingAddress";

const ShippingAddresses = Router();

ShippingAddresses.get("/", ShippingAddressesController.handleGetShippingAddresses);

export default ShippingAddresses;
