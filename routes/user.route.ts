import { Router } from "express";
import { readUsers } from "../controllers/user.controller";

const router = Router();

router.get("/", readUsers);

export default router;
