let employees = [];

export const createEmployee = (req, res) => {
  const newEmployee = {
    id_karyawan: employees.length + 1,
    nama: req.body.nama,
    posisi: req.body.posisi,
  };

  employees.push(newEmployee);

  res.send(`User with the name ${newEmployee.nama} added to the database!`);
};

export const getAllEmployee = (req, res) => {
  console.log(employees);

  res.send(employees);
};

export const getEmployee = (req, res) => {
  const { id_karyawan } = req.params;

  const foundEmployee = karyawan.find(
    (employee) => employee.id_karyawan == id_karyawan
  );

  res.send(foundEmployee);
};

export const deleteEmployee = (req, res) => {
  const { id_karyawan } = req.params;

  employees = employees.filter(
    (employee) => employee.id_karyawan != id_karyawan
  );

  res.send(`User with the id ${employee.id_karyawan} deleted to the database!`);
};

export const updateEmployee = (req, res) => {
  const { id_karyawan } = req.params;
  const { id_karyawaan, nama, posisi } = req.body;

  const employee = employees.find(
    (employee) => employee.id_karyawan == id_karyawan
  );

  if (id_karyawan) {
    employee.id_karyawan = id_karyawan;
  }

  if (nama) {
    employee.nama = nama;
  }

  if (posisi) {
    employee.posisi = posisi;
  }

  res.send(`User with the id ${employee.id_karyawan} has been updated!`);
};
