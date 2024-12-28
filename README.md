# super-shop-backend
 

Welcome to the backend repository of our Online Super Shop project. This Node.js and Express.js application serves as the backend for managing products, user authentication, and authorization.

## Overview

Our online super shop website allows users to browse and purchase various products available in our catalog. This backend system handles user authentication, product management, and ensures a secure and seamless shopping experience.

## Technological Stack

- **Node.js:** Server-side JavaScript runtime
- **Express.js:** Web application framework for Node.js
- **MongoDB:** NoSQL database for data storage
- **Mongoose:** MongoDB object modeling for Node.js
- **JWT (JSON Web Tokens):** Authentication and authorization mechanism
- **Zod:** TypeScript-first schema declaration and validation
- **Husky:** Git hooks to ensure code quality
- **Winston:** Logging library for Node.js
- **TypeScript:** Superset of JavaScript for static typing

## Tasks Overview

1. **User Validation:**
   - Utilizes Zod for declarative schema validation.
   - Validates user input for registration and login.

2. **Authentication and Authorization:**
   - Implements JWT for secure user authentication.
   - Ensures proper authorization for protected routes.

3. **Product Management:**
   - Uses Mongoose schema models for defining product structures.
   - Implements CRUD operations for managing products.

4. **Token Verification:**
   - Validates and verifies JWT tokens for secure communication.

## Project Structure

The project is structured using the following directories:

- **src:** Contains source code files.
  - **controllers:** Handles route logic.
  - **middleware:** Custom middleware functions.
  - **models:** Defines Mongoose schema models.
  - **routes:** Defines API routes.
  - **services:** Business logic services.
  - **utils:** Utility functions.
  - **validations:** Zod validation schemas.
- **config:** Configuration files (e.g., database connection, JWT secret).
- **shared:** Shared resources (e.g., logger).

## Getting Started

1. **Clone the repository:**

   git clone https://github.com/your-username/supershop-backend.git

   
Install dependencies:


cd supershop-backend


npm install


***Set up environment variables:

****Create a .env file in the project root and define the following variables:


*DATABASE_URL=mongodb://localhost:27017/supershop*
*PORT= your port*
*DATABASE_URL= database url*
*BCRYPT_SALT_ROUNDS=12*

*JWT_SECRET=your-secret-key*
*JWT_EXPIRES_IN=10d*
*JWT_REFRESH_SECRET=your-secret-key*
*JWT_REFRESH_EXPIRES_IN=365d*

Run the application:


*npm start*



*** Contact Information
* For any issues or further discussion about this project, feel free to contact: *

Name: Imam Hossain

Contact No: +8801624243747

Email: imamhossain6t9@gmail.com

LinkedIn: LinkedIn 

