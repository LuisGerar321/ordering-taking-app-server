import { Router } from "express";
import ClientsController from "../controllers/clients";

const Clients = Router();

Clients.get("/", ClientsController.handleGetClients);

export default Clients;
