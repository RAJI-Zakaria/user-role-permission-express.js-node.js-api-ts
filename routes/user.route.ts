import { Router } from "express";
import { readUsers, readUser } from "../controllers/user.controller";

const router = Router();

router.get("/", readUsers);
router.get("/:id", readUser);

export default router;
