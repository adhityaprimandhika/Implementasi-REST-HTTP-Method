import express from "express";
import bodyParser from "body-parser";
import karyawanRoutes from "./routes/employees.js";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/karyawan", karyawanRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
