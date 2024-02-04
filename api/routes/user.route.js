import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
// alawys import router function from user.controller to make your code prettier
router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);

export default router;
