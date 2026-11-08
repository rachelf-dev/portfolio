export type Project = {
  slug: string; // used in the URL
  title: string;
  tagline: string; // one line for the card
  coverImage?: string; // card image, path under /public
  pageImage?: string; // project page image; falls back to coverImage
  coverFit?: "cover" | "contain"; // card image inside the 16:9 frame; default "cover"
  demoVideo?: string; // optional short demo
  tags: string[]; // technologies
  role: string;
  duration: string;
  type: "study" | "personal" | "hackathon";
  highlight?: { label: string; detail?: string }; // optional accolade on the card and project page
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
    coverImage: "/images/phoenix-rag-chatbot-card.webp",
    pageImage: "/images/phoenix-rag-chatbot-chat.webp",
    tags: [
      "Python",
      "FastAPI",
      "RAG",
      "Gemini API",
      "BM25",
      "NumPy",
      "Cohere Rerank",
      "Docker",
      "Render",
      "Railway",
    ],
    role: "Solo Developer",
    duration: "1 week",
    type: "hackathon",
    highlight: {
      label: "Hackathon Finalist",
      detail:
        "Selected as a finalist at Hackathon AI, organized by Open Source - Placement, 2026",
    },
    liveUrl: "https://phoenix-rag-production.up.railway.app/",
    githubUrl: "https://github.com/rachelf-dev/phoenix-hebrew-rag-bot",
    problem:
      "Users need to search through more than 1,000 pages of website content to find relevant information, making information retrieval time-consuming and difficult.",
    solution:
      "Developed a Hebrew RAG chatbot that answers natural-language questions using only public content from Phoenix's website (fnx.co.il). The pipeline crawls, cleans, and chunks pages, builds a searchable index (BM25 by default, with an optional hybrid vector index), retrieves relevant passages, optionally re-ranks them with Cohere, and generates grounded answers with source links via gemini-3.5-flash-lite. When the site does not contain enough information, or the question is out of scope, the bot refuses to guess and directs users to customer support.",
    techStack: [
      {
        name: "Python 3.10",
        reason:
          "A strong ecosystem for NLP, retrieval and API work, pinned in the Docker image for reproducible runs.",
      },
      {
        name: "FastAPI + Uvicorn",
        reason: "A REST API with Pydantic request validation, served by Uvicorn.",
      },
      {
        name: "Google Gemini",
        reason:
          "Powers grounded answers and follow-up question rewriting. Fixed guardrail messages handle blocked or out-of-scope questions. Also creates the embeddings for the offline index build and hybrid retrieval.",
      },
      {
        name: "BM25 (rank-bm25)",
        reason:
          "Keyword retrieval used by default: fast, and needs no embedding call when a question arrives.",
      },
      {
        name: "NumPy vector index",
        reason:
          "Cosine similarity over stored embeddings, a lightweight index without a separate vector database. Used at query time only in hybrid mode; BM25-only mode loads just the chunk metadata and the BM25 index.",
      },
      {
        name: "Cohere Rerank (optional)",
        reason:
          "Re-orders the retrieved passages for better relevance. The pipeline skips this step when no API key is set.",
      },
      {
        name: "httpx, BeautifulSoup, lxml, Protego",
        reason: "Crawl pages, respect robots.txt rules and clean the HTML into text for indexing.",
      },
      {
        name: "SQLite",
        reason: "Stores crawled content and the embedding cache without running a separate database server.",
      },
      {
        name: "Docker",
        reason: "One container image for consistent builds and deployment.",
      },
      {
        name: "Render / Railway",
        reason: "Hosting platforms for the Docker image.",
      },
    ],
    order: 1,
  },
  {
    slug: "parent-teacher-meeting-system",
    title: "Smart Parent-Teacher Meeting Management System",
    tagline:
      "An intelligent scheduling system that automatically organizes parent-teacher meetings while considering family relationships and scheduling constraints.",
    coverImage: "/images/parent-teacher-meeting-system-card.png",
    pageImage: "/images/parent-teacher-meeting-system-page.png",
    coverFit: "contain",
    tags: [
      "C#",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "SQL Server",
      "Entity Framework Core",
      "JWT",
      "BCrypt",
    ],
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
        name: "C# + ASP.NET Core 8",
        reason:
          "A structured REST API with controllers. The scheduling algorithm runs on the server, next to the data, and not in the browser.",
      },
      {
        name: "Entity Framework Core 8 + SQL Server",
        reason:
          "Related data (schools, students, teachers, parents, availability and meetings) fits a relational model, with migrations to manage schema changes.",
      },
      {
        name: "React 19 + TypeScript (Vite)",
        reason:
          "A feature-based single-page app for the secretary's workflow: set up the day, collect parent availability, run the scheduling, export. Vite gives fast builds, and TypeScript is used across the client code.",
      },
      {
        name: "React Router + React Hook Form + Axios",
        reason:
          "Routing with protected pages, client-side form handling, and direct Axios calls to the REST API.",
      },
      {
        name: "JWT",
        reason:
          "Stateless authentication for a single-page app that calls a separate API, with role-based authorization (School and Admin).",
      },
      {
        name: "BCrypt",
        reason:
          "Hashes passwords at registration and verifies them at login, so plain-text passwords are never stored.",
      },
      {
        name: "EPPlus, jsPDF, ExcelJS",
        reason: "Excel import on the server, and PDF and Excel export in the browser.",
      },
    ],
    order: 2,
  },
  {
    slug: "calorie-calculator",
    title: "Calorie Calculator App",
    tagline:
      "Full-stack calorie tracker with an AI assistant that acts on your behalf.",
    coverImage: "/images/calorie-calculator-card.webp",
    pageImage: "/images/calorie-calculator-chat.webp",
    tags: ["Angular", "NgRx", "Node.js", "Express", "MongoDB", "Gemini API"],
    role: "Full-stack developer in a team of 2. Built authentication, user management and infrastructure, and built the AI chat assistant (Gemini function calling) end to end.",
    duration: "1 month",
    type: "study",
    liveUrl: "https://calorie-counter-app1.netlify.app/",
    githubUrl: "https://github.com/rachelf-dev/calorie-counter-app",
    problem:
      "Tracking daily calories usually means searching a long food list, entering quantities and checking totals by hand, which is slow and easy to abandon.",
    solution:
      "A full-stack web app with a Hebrew, right-to-left interface. Users register, search a database of about 550 foods, build a daily basket, set a calorie goal and follow their history on a chart. They can also add private products, and admins manage global products and users. A weekly email summarizes the last seven days with a chart. The highlight is an AI assistant built with Gemini function calling: users type a request in Hebrew, and the assistant searches products, adds or removes items, creates products or summarizes the day, running inside the logged-in user's context. After each action the UI state refreshes automatically.",
    techStack: [
      {
        name: "Angular 21",
        reason: "Standalone components and lazy-loaded routes keep the app modular and fast.",
      },
      {
        name: "NgRx",
        reason: "A predictable store for auth and daily logs, so the basket and progress bar stay in sync.",
      },
      {
        name: "Angular Material (RTL)",
        reason: "Accessible components with proper right-to-left support.",
      },
      {
        name: "Node.js + Express",
        reason: "A simple REST API with JWT auth and role-based middleware.",
      },
      {
        name: "MongoDB + Mongoose",
        reason:
          "Flexible documents for products and daily logs, with unique indexes and model-level logic.",
      },
      {
        name: "Gemini API",
        reason: "Function calling lets the assistant call real backend actions instead of just chatting.",
      },
      {
        name: "Jest + Supertest",
        reason: "Automated API and integration tests.",
      },
      {
        name: "Netlify + Render",
        reason: "Simple, free deployment for the frontend and the API.",
      },
    ],
    order: 3,
  },
];

export const projectPlaceholderImage = "/images/project-placeholder.webp";

export function getProjectCardImage(project: Pick<Project, "coverImage">): string {
  return project.coverImage ?? projectPlaceholderImage;
}

export function getProjectPageImage(
  project: Pick<Project, "coverImage" | "pageImage">,
): string {
  return project.pageImage ?? project.coverImage ?? projectPlaceholderImage;
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const sorted = getSortedProjects();
  const index = sorted.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previous: sorted[index - 1],
    next: sorted[index + 1],
  };
}
