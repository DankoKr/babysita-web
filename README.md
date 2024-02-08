# React + Vite + JavaScript (Babysita-Web)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)]

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above)
- npm (package manager)

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://git.fhict.nl/I500872/babysita-web.git
   ```

2. Navigate to the project directory:

   ```bash
   cd babysita-web-main
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- npm run dev - Starts the development server.
- npm run build - Builds the production-ready code.
- npm preview - Starts the Vite development server in preview mode.
- npm run cypress:open - Starts Cypress and can be used for the E2E testing

## 📂 Project Structure

The project structure layout:

```python
babysita-web-main/
  ├── node_modules/      # Project dependencies
  ├── cypress/            # Cypress E2E tests
  ├── src/               # Application source code
  │   ├── assets/        # Project assets
  │   │   └── images/    # Project images
  │   ├── auth/          # The files responsible for the authentication
  │   ├── components/    # React components
  │   ├── pages/         # React components that serve the role of pages
  │   ├── schemas/       # The validation schemas for the Formik forms
  │   ├── services/      # Custom hooks that perform API calls
  │   ├── websockets/    # The files responsible for the WebSockets feature
  │   ├── App.jsx        # Application entry point
  │   |── App.css        # CSS file for the Application entry point
  │   ├── index.css      # Main CSS for rendering file
  │   └── main.jsx       # Main rendering file
  ├── .eslintrc.cjs      # ESLint configuration
  ├── cypress.config.js  # Cypress configuration
  ├── index.html         # HTML entry point
  ├── LICENSE.txt        # License for the application
  ├── package-lock.json  # Application dependancies in detail
  ├── package.json       # Application dependancies and scripts
  └── vite.config.js     # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
