import express from "express";

const router = express.Router();

let karyawan = [];

router.get("/", (req, res) => {
  console.log(karyawan);

  res.send(karyawan);
});

router.post("/", (req, res) => {
  const karyawanInstance = req.body;

  karyawan.push(karyawanInstance);

  res.send(
    `User with the name ${karyawanInstance.nama} added to the database!`
  );
});

router.get("/:id_karyawan", (req, res) => {
  const karyawanInstance = req.body;
  const { id_karyawan } = req.params;

  const foundKaryawan = karyawan.find(
    (karyawanInstance) => karyawanInstance.id_karyawan == id_karyawan
  );

  res.send(foundKaryawan);
});

router.delete("/:id_karyawan", (req, res) => {
  const karyawanInstance = req.body;
  const { id_karyawan } = req.params;

  karyawan = karyawan.filter(
    (karyawanInstance) => karyawanInstance.id_karyawan != id_karyawan
  );

  res.send(
    `User with the id ${karyawanInstance.id_karyawan} deleted to the database!`
  );
});

router.patch("/:id_karyawan", (req, res) => {
  const { id_karyawan } = req.params;
  const { id_karyawaan, nama, posisi } = req.body;

  const karyawanInstance = karyawan.find(
    (karyawanInstance) => karyawanInstance.id_karyawan == id_karyawan
  );

  if (id_karyawan) {
    karyawanInstance.id_karyawan = id_karyawan;
  }

  if (nama) {
    karyawanInstance.nama = nama;
  }

  if (posisi) {
    karyawanInstance.posisi = posisi;
  }

  res.send(
    `User with the id ${karyawanInstance.id_karyawan} has been updated!`
  );
});

export default router;
