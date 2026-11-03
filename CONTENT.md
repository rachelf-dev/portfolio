# CONTENT

## Profile

- Full name: Rachel Feuchtwanger
- Role: Full-Stack Software Developer
- One-line tagline: Full-Stack Software Developer passionate about building intelligent, scalable applications with modern technologies, clean architecture, and AI-driven solutions.
- Email: rachelf.dev@gmail.com
- GitHub URL: https://github.com/rachelf-dev
- Resume file: /resume.pdf
- Photo: none

## About

- Paragraph:

I am a software developer with strong analytical and problem-solving skills, experienced in developing end-to-end software solutions. I enjoy designing and building complex systems, writing clean and modular code, and working with APIs and databases. I have hands-on experience with Full-Stack development, AI technologies, and modern development tools. I am a fast independent learner who enjoys tackling technical challenges and working collaboratively.

- Skills:
  - Languages: Python, Java, C, C++, C#, Assembly, JavaScript, TypeScript
  - Frameworks: React, Angular, Vue, .NET Core, FastAPI, Node.js, WPF, Entity Framework, Bootstrap
  - Databases: SQL Server, MongoDB
  - Tools and Cloud: GitHub, Linux, Windows, Arduino, Railway, Netlify, Render, Copilot, Cursor, ChatGPT, Claude, Gemini

- Education line: MAHAT, Practical Software Engineering Studies, 2024–2026

- Sentence about projects: The projects below represent my hands-on development experience, demonstrating my ability to design, develop, and implement end-to-end software solutions using a variety of technologies.

---

## Projects

### Project 1

- slug: phoenix-rag-chatbot
- title: Phoenix AI RAG Chatbot
- tagline: An AI-powered Hebrew chatbot that provides accurate answers based exclusively on Phoenix's public website content.
- cover image file: [To be added]
- demo video/GIF: none
- tags: Python, FastAPI, RAG, BM25, Gemini Flash
- my role: Solo Developer
- duration: 1 week
- type: study
- live URL: https://phoenix-rag-production.up.railway.app/
- GitHub URL: https://github.com/rachelf-dev/phoenix-hebrew-rag-bot
- order: 1

- The Problem:
Users need to search through more than 1,000 pages of website content to find relevant information, making information retrieval time-consuming and difficult.

- The Solution:
Developed a Hebrew AI chatbot based on RAG architecture that allows users to ask natural-language questions and receive answers based exclusively on Phoenix's public website content. The system crawls, cleans, and chunks website content, builds a BM25 search index, and uses Cohere reranking to retrieve relevant information. Gemini Flash generates contextual answers with source links. When relevant information is unavailable, the chatbot directs users to customer support instead of generating unsupported answers.

- Tech Stack:
  - Python: Backend development and data processing.
  - FastAPI: Building the backend API.
  - BM25: Efficient information retrieval.
  - Cohere: Improving search relevance through reranking.
  - Gemini Flash: Generating contextual answers based on retrieved information.

### Project 2

- slug: parent-teacher-meeting-system
- title: Smart Parent-Teacher Meeting Management System
- tagline: An intelligent scheduling system that automatically organizes parent-teacher meetings while considering family relationships and scheduling constraints.
- cover image file: [To be added]
- demo video/GIF: none
- tags: C#, .NET Core, React, SQL Server, JWT
- my role: Solo Full-Stack Developer
- duration: 2 months
- type: study
- live URL: none
- GitHub URL: https://github.com/rachelf-dev/parent-meeting
- order: 2

- The Problem:
Traditional parent-teacher meeting scheduling requires parents to wait between appointments, especially when their children study in different classes. Manual scheduling also makes it difficult to accommodate parents with special time constraints.

- The Solution:
Developed a full-stack platform with an intelligent scheduling algorithm that automatically arranges meetings. The algorithm considers siblings so that parents can attend their children's meetings consecutively, while also accommodating urgent scheduling constraints entered by the school secretary. The system also generates printable meeting schedules organized by class.

- Tech Stack:
  - C#: Implementing application logic and scheduling algorithms.
  - .NET Core: Backend development and REST API implementation.
  - React: Building the interactive user interface.
  - SQL Server: Relational database design and data management.
  - JWT and BCrypt: Secure authentication, authorization, and password protection.

### Project 3

- slug: calorie-calculator
- title: Calorie Calculator App
- tagline: A full-stack calorie tracking application that helps users monitor daily food consumption and progress toward personalized calorie goals.
- cover image file: [To be added]
- demo video/GIF: none
- tags: Angular, Node.js, MongoDB, JWT, NgRx
- my role: Full-Stack Developer in a team of 2, responsible for authentication, user management, and profile functionality.
- duration: 1 month
- type: study
- live URL: https://calorie-counter-app1.netlify.app/
- GitHub URL: https://github.com/rachelf-dev/calorie-counter-app
- order: 3

- The Problem:
Users need a convenient way to track daily calorie consumption, manage food items, and monitor their progress toward personalized calorie goals.

- The Solution:
Developed a full-stack calorie tracking application featuring food search, daily meal tracking, personalized calorie goals, weekly history charts, and user-specific food products. The application also includes role-based access for regular users and administrators, profile management, an AI chatbot, and automated weekly email summaries.

  My contribution included:
  - Backend: Designed the user model and implemented registration, login, JWT authentication, profile management with image upload, and administrator permissions.
  - Frontend: Developed login, registration, and profile pages using Angular.
  - State Management: Implemented authentication state management with NgRx, HTTP interceptors, and route guards.
  - User Experience: Implemented role-based navigation menus.
  - Additional Contributions: Added the AI chatbot and assisted with deployment to Netlify and Render.

- Tech Stack:
  - Angular: Building the frontend and user interface.
  - Node.js: Backend development and API implementation.
  - MongoDB: Storing user information and application data.
  - JWT: Secure authentication.
  - NgRx: Managing application and authentication state.