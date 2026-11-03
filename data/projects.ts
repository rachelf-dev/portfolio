export type Project = {
  slug: string; // used in the URL
  title: string;
  tagline: string; // one line for the card
  coverImage: string; // path under /public, also the main image
  demoVideo?: string; // optional short demo
  tags: string[]; // technologies
  role: string;
  duration: string;
  type: "study" | "personal";
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  techStack: { name: string; reason: string }[];
  order: number; // display order
};

export const projects: Project[] = [
  {
    slug: "phoenix-rag-chatbot",
    title: "Phoenix AI RAG Chatbot",
    tagline:
      "An AI-powered Hebrew chatbot that provides accurate answers based exclusively on Phoenix's public website content.",
    coverImage: "/images/phoenix-rag-chatbot.png",
    tags: ["Python", "FastAPI", "RAG", "BM25", "Gemini Flash"],
    role: "Solo Developer",
    duration: "1 week",
    type: "study",
    liveUrl: "https://phoenix-rag-production.up.railway.app/",
    githubUrl: "https://github.com/rachelf-dev/phoenix-hebrew-rag-bot",
    problem:
      "Users need to search through more than 1,000 pages of website content to find relevant information, making information retrieval time-consuming and difficult.",
    solution:
      "Developed a Hebrew AI chatbot based on RAG architecture that allows users to ask natural-language questions and receive answers based exclusively on Phoenix's public website content. The system crawls, cleans, and chunks website content, builds a BM25 search index, and uses Cohere reranking to retrieve relevant information. Gemini Flash generates contextual answers with source links. When relevant information is unavailable, the chatbot directs users to customer support instead of generating unsupported answers.",
    techStack: [
      {
        name: "Python",
        reason: "Backend development and data processing.",
      },
      {
        name: "FastAPI",
        reason: "Building the backend API.",
      },
      {
        name: "BM25",
        reason: "Efficient information retrieval.",
      },
      {
        name: "Cohere",
        reason: "Improving search relevance through reranking.",
      },
      {
        name: "Gemini Flash",
        reason: "Generating contextual answers based on retrieved information.",
      },
    ],
    order: 1,
  },
  {
    slug: "parent-teacher-meeting-system",
    title: "Smart Parent-Teacher Meeting Management System",
    tagline:
      "An intelligent scheduling system that automatically organizes parent-teacher meetings while considering family relationships and scheduling constraints.",
    coverImage: "/images/parent-teacher-meeting-system.png",
    tags: ["C#", ".NET Core", "React", "SQL Server", "JWT"],
    role: "Solo Full-Stack Developer",
    duration: "2 months",
    type: "study",
    githubUrl: "https://github.com/rachelf-dev/parent-meeting",
    problem:
      "Traditional parent-teacher meeting scheduling requires parents to wait between appointments, especially when their children study in different classes. Manual scheduling also makes it difficult to accommodate parents with special time constraints.",
    solution:
      "Developed a full-stack platform with an intelligent scheduling algorithm that automatically arranges meetings. The algorithm considers siblings so that parents can attend their children's meetings consecutively, while also accommodating urgent scheduling constraints entered by the school secretary. The system also generates printable meeting schedules organized by class.",
    techStack: [
      {
        name: "C#",
        reason: "Implementing application logic and scheduling algorithms.",
      },
      {
        name: ".NET Core",
        reason: "Backend development and REST API implementation.",
      },
      {
        name: "React",
        reason: "Building the interactive user interface.",
      },
      {
        name: "SQL Server",
        reason: "Relational database design and data management.",
      },
      {
        name: "JWT and BCrypt",
        reason: "Secure authentication, authorization, and password protection.",
      },
    ],
    order: 2,
  },
  {
    slug: "calorie-calculator",
    title: "Calorie Calculator App",
    tagline:
      "A full-stack calorie tracking application that helps users monitor daily food consumption and progress toward personalized calorie goals.",
    coverImage: "/images/calorie-calculator.png",
    tags: ["Angular", "Node.js", "MongoDB", "JWT", "NgRx"],
    role: "Full-Stack Developer in a team of 2, responsible for authentication, user management, and profile functionality.",
    duration: "1 month",
    type: "study",
    liveUrl: "https://calorie-counter-app1.netlify.app/",
    githubUrl: "https://github.com/rachelf-dev/calorie-counter-app",
    problem:
      "Users need a convenient way to track daily calorie consumption, manage food items, and monitor their progress toward personalized calorie goals.",
    solution:
      "Developed a full-stack calorie tracking application featuring food search, daily meal tracking, personalized calorie goals, weekly history charts, and user-specific food products. The application also includes role-based access for regular users and administrators, profile management, an AI chatbot, and automated weekly email summaries.\n\nMy contribution included:\n- Backend: Designed the user model and implemented registration, login, JWT authentication, profile management with image upload, and administrator permissions.\n- Frontend: Developed login, registration, and profile pages using Angular.\n- State Management: Implemented authentication state management with NgRx, HTTP interceptors, and route guards.\n- User Experience: Implemented role-based navigation menus.\n- Additional Contributions: Added the AI chatbot and assisted with deployment to Netlify and Render.",
    techStack: [
      {
        name: "Angular",
        reason: "Building the frontend and user interface.",
      },
      {
        name: "Node.js",
        reason: "Backend development and API implementation.",
      },
      {
        name: "MongoDB",
        reason: "Storing user information and application data.",
      },
      {
        name: "JWT",
        reason: "Secure authentication.",
      },
      {
        name: "NgRx",
        reason: "Managing application and authentication state.",
      },
    ],
    order: 3,
  },
];
