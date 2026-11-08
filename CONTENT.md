# CONTENT

## Profile

- Full name: Rachel Feuchtwanger
- Role: Full-Stack Software Developer
- One-line tagline: Full-Stack Software Developer passionate about building intelligent, scalable applications with modern technologies, clean architecture, and AI-driven solutions.
- Email: rachelf.dev@gmail.com
- GitHub URL: https://github.com/rachelf-dev
- Resume file: /Rachel Feuchtwanger  CV.pdf
- Photo: none

## About

- Heading: About me

- Paragraph:

I am a software developer with strong analytical and problem-solving skills, experienced in developing end-to-end software solutions. I enjoy designing and building complex systems, writing clean and modular code, and working with APIs and databases. I have hands-on experience with Full-Stack development, AI technologies, and modern development tools. I am a fast independent learner who enjoys tackling technical challenges and working collaboratively.

- Hands-on Experience:
My projects demonstrate my practical development experience, problem-solving skills, and ability to build real-world software solutions using modern technologies.

- Skills heading: Technical Skills
- Skills:
  - Languages: Python, Java, C, C++, C#, Assembly, JavaScript, TypeScript
  - Frameworks & Libraries: React, Angular, Vue, Node.js, FastAPI, .NET Core, WPF, Entity Framework, Bootstrap
  - Databases: SQL Server, MongoDB
  - Development Tools & Platforms: GitHub, Linux, Windows, Railway, Netlify, Render, Arduino
  - AI Development Tools: Copilot, Cursor, ChatGPT, Claude, Gemini

- Education line: MAHAT, Practical Software Engineering Studies, 2024–2026

---

## Projects

### Project 1

- slug: phoenix-rag-chatbot
- title: Phoenix AI RAG Chatbot
- tagline: An AI-powered Hebrew chatbot that provides accurate answers based exclusively on Phoenix's public website content.
- cover image file: [To be added]
- demo video/GIF: none
- tags: Python, FastAPI, RAG, Gemini API, BM25, NumPy, Cohere Rerank, Docker, Render, Railway
- my role: Solo Developer
- duration: 1 week
- type: hackathon
- highlight label: Hackathon Finalist
- highlight detail: Selected as a finalist at Hackathon AI, organized by Open Source - Placement, 2026
- live URL: https://phoenix-rag-production.up.railway.app/
- GitHub URL: https://github.com/rachelf-dev/phoenix-hebrew-rag-bot
- order: 1

- The Problem:
Users need to search through more than 1,000 pages of website content to find relevant information, making information retrieval time-consuming and difficult.

- The Solution:
Developed a Hebrew RAG chatbot that answers natural-language questions using only public content from Phoenix's website (fnx.co.il). The pipeline crawls, cleans, and chunks pages, builds a searchable index (BM25 by default, with an optional hybrid vector index), retrieves relevant passages, optionally re-ranks them with Cohere, and generates grounded answers with source links via gemini-3.5-flash-lite. When the site does not contain enough information, or the question is out of scope, the bot refuses to guess and directs users to customer support.

- Tech Stack:
  - Python 3.10: A strong ecosystem for NLP, retrieval and API work, pinned in the Docker image for reproducible runs.
  - FastAPI + Uvicorn: A REST API with Pydantic request validation, served by Uvicorn.
  - Google Gemini: Powers grounded answers and follow-up question rewriting. Fixed guardrail messages handle blocked or out-of-scope questions. Also creates the embeddings for the offline index build and hybrid retrieval.
  - BM25 (rank-bm25): Keyword retrieval used by default: fast, and needs no embedding call when a question arrives.
  - NumPy vector index: Cosine similarity over stored embeddings, a lightweight index without a separate vector database. Used at query time only in hybrid mode; BM25-only mode loads just the chunk metadata and the BM25 index.
  - Cohere Rerank (optional): Re-orders the retrieved passages for better relevance. The pipeline skips this step when no API key is set.
  - httpx, BeautifulSoup, lxml, Protego: Crawl pages, respect robots.txt rules and clean the HTML into text for indexing.
  - SQLite: Stores crawled content and the embedding cache without running a separate database server.
  - Docker: One container image for consistent builds and deployment.
  - Render / Railway: Hosting platforms for the Docker image.

### Project 2

- slug: parent-teacher-meeting-system
- title: Smart Parent-Teacher Meeting Management System
- tagline: An intelligent scheduling system that automatically organizes parent-teacher meetings while considering family relationships and scheduling constraints.
- cover image file: [To be added]
- demo video/GIF: none
- tags: C#, ASP.NET Core, React, TypeScript, SQL Server, Entity Framework Core, JWT, BCrypt
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
  - C# + ASP.NET Core 8: A structured REST API with controllers. The scheduling algorithm runs on the server, next to the data, and not in the browser.
  - Entity Framework Core 8 + SQL Server: Related data (schools, students, teachers, parents, availability and meetings) fits a relational model, with migrations to manage schema changes.
  - React 19 + TypeScript (Vite): A feature-based single-page app for the secretary's workflow: set up the day, collect parent availability, run the scheduling, export. Vite gives fast builds, and TypeScript is used across the client code.
  - React Router + React Hook Form + Axios: Routing with protected pages, client-side form handling, and direct Axios calls to the REST API.
  - JWT: Stateless authentication for a single-page app that calls a separate API, with role-based authorization (School and Admin).
  - BCrypt: Hashes passwords at registration and verifies them at login, so plain-text passwords are never stored.
  - EPPlus, jsPDF, ExcelJS: Excel import on the server, and PDF and Excel export in the browser.

### Project 3

- slug: calorie-calculator
- title: Calorie Calculator App
- tagline: Full-stack calorie tracker with an AI assistant that acts on your behalf.
- cover image file: [To be added]
- demo video/GIF: none
- tags: Angular, NgRx, Node.js, Express, MongoDB, Gemini API
- my role: Full-stack developer in a team of 2. Built authentication, user management and infrastructure, and built the AI chat assistant (Gemini function calling) end to end.
- duration: 1 month
- type: study
- live URL: https://calorie-counter-app1.netlify.app/
- GitHub URL: https://github.com/rachelf-dev/calorie-counter-app
- order: 3

- The Problem:
Tracking daily calories usually means searching a long food list, entering quantities and checking totals by hand, which is slow and easy to abandon.

- The Solution:
A full-stack web app with a Hebrew, right-to-left interface. Users register, search a database of about 550 foods, build a daily basket, set a calorie goal and follow their history on a chart. They can also add private products, and admins manage global products and users. A weekly email summarizes the last seven days with a chart. The highlight is an AI assistant built with Gemini function calling: users type a request in Hebrew, and the assistant searches products, adds or removes items, creates products or summarizes the day, running inside the logged-in user's context. After each action the UI state refreshes automatically.

- Tech Stack:
  - Angular 21: Standalone components and lazy-loaded routes keep the app modular and fast.
  - NgRx: A predictable store for auth and daily logs, so the basket and progress bar stay in sync.
  - Angular Material (RTL): Accessible components with proper right-to-left support.
  - Node.js + Express: A simple REST API with JWT auth and role-based middleware.
  - MongoDB + Mongoose: Flexible documents for products and daily logs, with unique indexes and model-level logic.
  - Gemini API: Function calling lets the assistant call real backend actions instead of just chatting.
  - Jest + Supertest: Automated API and integration tests.
  - Netlify + Render: Simple, free deployment for the frontend and the API.