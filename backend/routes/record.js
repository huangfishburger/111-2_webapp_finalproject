import { Router } from "express";
import { createReocrd, getAllRecord } from "./../controllers/record";

const router = Router();

/* ROUTER */
router.post("/", createReocrd);
router.get("/", getAllRecord);

export default router;
