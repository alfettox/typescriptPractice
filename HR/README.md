# TypeScript HR Department Application

This is a sample TypeScript HR Department application that demonstrates key TypeScript features and concepts. The application manages employee data and calculates the total salary of the department.

## Table of Contents

1. [Project Overview](#project-overview)
2. [TypeScript Features](#typescript-features)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Project Overview

This TypeScript HR Department application consists of the following components:

1. **`Employee` Interface**: An interface that defines the structure of an employee, including `id`, `name`, `department`, and `salary`.

2. **`HRDepartment` Class**: A class that models the HR department and manages employees. It includes:

   - An array `employees` to store employee data.
   - Methods to `hireEmployee(employee: Employee)` and `calculateTotalSalary()`, which adds employees and calculates the total department salary.

3. **Sample Employee Data**: Two sample employee objects, `e1` and `e2`, are provided for demonstration purposes.

## TypeScript Features

This project highlights several key TypeScript features and concepts:

- **Interfaces**: The `Employee` interface is used to define the structure of employee objects.

- **Classes**: The `HRDepartment` class encapsulates the logic for managing employees and calculating the department's total salary.

- **Type Annotations**: Type annotations are used to specify the types of variables, parameters, and return values, ensuring type safety.

- **Type Inference**: TypeScript can infer types in many cases, reducing the need for explicit type annotations.

- **Static Typing**: TypeScript enforces type checking at compile-time, helping catch type-related errors early in development.

## Getting Started

To run this TypeScript HR Department application, follow these steps:

1. **Prerequisites**:

   - Node.js and npm should be installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/hr-department.git
   cd hr-department

    Install Dependencies:

    bash

npm install

Compile TypeScript:

bash

    tsc

    This command will transpile the TypeScript code into JavaScript.

Usage

Once you have followed the "Getting Started" steps, you can run the program as follows:

    Open your terminal or command prompt.

    Navigate to the directory where your TypeScript code is located.

    Run the compiled JavaScript code using Node.js:

    bash

    node hr-app.js

The application will display employee information and calculate the total department salary.