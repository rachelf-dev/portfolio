export type SkillGroup = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  githubUrl: string;
  resumePath: string;
  photo: string | null;
  about: string;
  skills: SkillGroup[];
  education: string;
  projectsNote: string;
};

export const profile: Profile = {
  name: "Rachel Feuchtwanger",
  role: "Full-Stack Software Developer",
  tagline:
    "Full-Stack Software Developer passionate about building intelligent, scalable applications with modern technologies, clean architecture, and AI-driven solutions.",
  email: "rachelf.dev@gmail.com",
  githubUrl: "https://github.com/rachelf-dev",
  resumePath: "/resume.pdf",
  photo: null,
  about:
    "I am a software developer with strong analytical and problem-solving skills, experienced in developing end-to-end software solutions. I enjoy designing and building complex systems, writing clean and modular code, and working with APIs and databases. I have hands-on experience with Full-Stack development, AI technologies, and modern development tools. I am a fast independent learner who enjoys tackling technical challenges and working collaboratively.",
  skills: [
    {
      label: "Languages",
      items: [
        "Python",
        "Java",
        "C",
        "C++",
        "C#",
        "Assembly",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      label: "Frameworks",
      items: [
        "React",
        "Angular",
        "Vue",
        ".NET Core",
        "FastAPI",
        "Node.js",
        "WPF",
        "Entity Framework",
        "Bootstrap",
      ],
    },
    {
      label: "Databases",
      items: ["SQL Server", "MongoDB"],
    },
    {
      label: "Tools and Cloud",
      items: [
        "GitHub",
        "Linux",
        "Windows",
        "Arduino",
        "Railway",
        "Netlify",
        "Render",
        "Copilot",
        "Cursor",
        "ChatGPT",
        "Claude",
        "Gemini",
      ],
    },
  ],
  education: "MAHAT, Practical Software Engineering Studies, 2024–2026",
  projectsNote:
    "The projects below represent my hands-on development experience, demonstrating my ability to design, develop, and implement end-to-end software solutions using a variety of technologies.",
};
