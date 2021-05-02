import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployee,
  updateEmployee,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/", getAllEmployee);

router.post("/", createEmployee);

router.get("/:id_karyawan", getEmployee);

router.delete("/:id_karyawan", deleteEmployee);

router.put("/:id_karyawan", updateEmployee);

export default router;
