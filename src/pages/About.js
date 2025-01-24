// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '80vh' }}
    >
      <div
        style={{
          maxWidth: '600px',
          backgroundColor: 'rgba(150, 150, 225, 0.8)', // translucent white
          color: '#000',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        {/* Title in center */}
        <h2 className="text-center mb-4">About</h2>

        {/* Detailed information in normal (left or justified) text */}
        <p style={{ textAlign: 'justify' }}>
          This Task Management web application allows users to effortlessly plan and 
          track their everyday tasks. It is built using React, ensuring a smooth and 
          responsive user interface. The app supports user registration, secure login, 
          and a drag-and-drop to-do board with columns for easy organization. 
        </p>

        <p style={{ textAlign: 'justify' }}>
          In addition to adding and removing tasks, each task can be given a due date 
          and seen on a monthly calendar view. The application offers two visual themes: 
          a vibrant default mode and a dark mode. Users can also delete tasks instantly 
          either by using a dedicated delete zone or clicking the small cross icon on 
          individual task cards. This entire project emphasizes a clean design, user-friendly 
          interactions, and seamless navigation between pages, including the login page, 
          to-do board, and calendar.
        </p>

        <p style={{ textAlign: 'justify' }}>
          All data is stored locally in the user’s browser for demonstration purposes, 
          removing the need for a dedicated backend. Although currently frontend-only, 
          it can be expanded with real API calls for more advanced features. Overall, 
          this application showcases a structured, responsive, and visually appealing 
          approach to task management, meeting the requirements of a robust React-based 
          project.
        </p>
      </div>
    </div>
  );
}

export default About;
