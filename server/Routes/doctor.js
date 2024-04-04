import express from "express";
import {
	updateDoctor,
	deleteDoctor,
	getSingleDoctor,
	getAllDoctors,
	getDoctorProfile,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js';

const router = express.Router();

//nested route
router.use('/:doctorId/reviews', reviewRouter);

router.get("/:id",authenticate,restrict(["doctor", "patient"]), getSingleDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.get("/", authenticate, getAllDoctors);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);
export default router;
