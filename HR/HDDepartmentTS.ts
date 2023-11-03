interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

class HRDepartment {
  employees: Employee[] = [];

  constructor() {
    this.employees = [];
  }

  hireEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  calculateTotalSalary(): number {
    return this.employees.reduce(
      (total, employee) => total + employee.salary,
      0
    );
  }
}

const e1: Employee = {
  id: 1,
  name: "Giovanni",
  department: "Sales",
  salary: 80000,
};

const e2: Employee = {
  id: 2,
  name: "Alessio",
  department: "Marketing",
  salary: 45000,
};

const HRDep = new HRDepartment();

HRDep.hireEmployee(e1);
HRDep.hireEmployee(e2);

console.log("Employees: ");
HRDep.employees.forEach((employee) => {
  console.log(`ID: ${employee.id},
                 Name: ${employee.name},
                 Department: ${employee.department},
                 Salary: ${employee.salary}
                 `);
});

const totalSalary = HRDep.calculateTotalSalary();
console.log(`Total Department Salary: ${totalSalary}`);
