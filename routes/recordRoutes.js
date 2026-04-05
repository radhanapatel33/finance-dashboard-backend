import express from "express";
import roleMiddleware from "../middleware/roleMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), createRecord);
router.get("/", authMiddleware, getRecords);
router.patch("/:id", authMiddleware, roleMiddleware("admin"), updateRecord);
router.delete("/:id", authMiddleware, roleMiddleware("admin"),  deleteRecord);

export default router;