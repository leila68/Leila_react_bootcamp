# React Project Setup with Vite

## Prerequisites
- Ensure you have **Node.js** installed (Version **18 or higher** is required).
- You can check your Node.js version by running:
  ```sh
  node -v
  ```

## Steps to Create a React Project

1. **Create a new React project using Vite**
   ```sh
   npm create vite@latest
   ```
   - This command initializes a new Vite project.

2. **Enter the project name**
   - After running the command, you’ll be prompted to provide a project name.
   - Example: `my-react-app`

3. **Select React as the framework**
   - Choose `React` from the available options.

4. **Select JavaScript as the variant**
   - Pick `JavaScript` instead of TypeScript.

5. **Navigate into the project directory**
   ```sh
   cd my-react-app
   ```
   - Replace `my-react-app` with your actual project name.

6. **Install dependencies**
   ```sh
   npm install
   ```
   - This installs all required dependencies.

7. **Start the development server**
   ```sh
   npm run dev
   ```
   - This launches the development server.

8. **Open the application in the browser**
   - Go to: **[http://localhost:5174/](http://localhost:5174/)**
   - This is the default port for Vite.

## Additional Notes
- If you encounter issues, try running:
  ```sh
  npm install && npm run dev
  ```
- To stop the server, use `Ctrl + C` in the terminal.
- You can modify the project inside the `src` folder.