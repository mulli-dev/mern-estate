import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();
// alawys import router function from user.controller to make your code prettier
router.get("/test", test);

export default router;
