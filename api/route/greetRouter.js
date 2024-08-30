import express from "express";
import { greetAnonUser, greetUser } from "../controllers/greetController.js";

const router = express.Router();

router.route("/").get(greetAnonUser).post(greetUser);

export default router;
