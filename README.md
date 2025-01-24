# Task Management Web Application

This is a **React**-based web application for managing tasks. It features a **login/register** system, **drag-and-drop** task boards, a **calendar** to view due dates, and a **light/dark theme** switch.

## Features

1. **User Login & Registration**
   - Users can create an account (username and password).
   - Data is saved in **local storage**.

2. **To-Do Board**
   - Organize tasks in three columns: **To Do**, **In Progress**, and **Done**.
   - **Drag-and-Drop** to move tasks between columns.
   - A special delete area allows for easy task removal.

3. **Calendar**
   - Each task can have a due date.
   - A monthly calendar displays tasks on their assigned dates.

4. **Theme Switching**
   - **Default Theme** with an animated gradient background.
   - **Dark Theme** for a simpler, low-light experience.

5. **Responsive Design**
   - Built with **Bootstrap** to ensure compatibility across devices.

6. **Footer**
   - A dark gray footer is visible on all pages.

## Usage

1. **Register** a new account from the home page. 
2. **Log In** with your credentials.
3. **Add Tasks** by entering a title, priority, and due date.
4. **Drag** tasks between columns or **delete** them by dropping onto the delete box.
5. **Switch Themes** (Default or Dark) using the button in the navbar.
6. **Check Calendar** to see all tasks by date.

## Project Structure


src/
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── ToDo.jsx
│   ├── Calendar.jsx
│   ├── Home.jsx
│   └── Dashboard.jsx
├── context/
│   └── ThemeContext.js
├── App.js
├── index.js
└── styles.css


## Contributing

1. **Fork** the repository.
2. **Create** a new branch for your feature or bug fix.
3. **Commit** changes with clear messages.
4. **Push** to your fork and **submit** a pull request.

## License

This project is for **educational purposes**. You are free to use or modify it under the terms you choose, but ensure to respect the original credits for design inspiration.

---

**Enjoy managing your tasks with this React application!**

