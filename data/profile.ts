export type SkillGroup = {
  title: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  githubUrl: string;
  siteUrl: string;
  resumePath: string;
  resumeDownloadName: string;
  photo: string | null;
  aboutHeading: string;
  about: string;
  experienceHeading: string;
  skillsHeading: string;
  skills: SkillGroup[];
  education: string;
  projectsIntro: string;
  projectsNote: string;
};

export const profile: Profile = {
  name: "Rachel Feuchtwanger",
  role: "Software Developer",
  tagline:
    "Software Developer passionate about building intelligent, scalable applications with modern technologies, clean architecture, and AI-driven solutions.",
  email: "rachelf.dev@gmail.com",
  githubUrl: "https://github.com/rachelf-dev",
  siteUrl: "https://rachelf-portfolio.vercel.app",
  resumePath: "/Rachel%20Feuchtwanger%20%20CV.pdf",
  resumeDownloadName: "Rachel_Feuchtwanger_CV.pdf",
  photo: null,
  aboutHeading: "About me",
  about:
    "I am a software developer with strong analytical and problem-solving skills, experienced in developing end-to-end software solutions. I enjoy designing and building complex systems, writing clean and modular code, and working with APIs and databases. I have hands-on experience with Full-Stack development, AI technologies, and modern development tools. I am a fast independent learner who enjoys tackling technical challenges and working collaboratively.",
  experienceHeading: "Hands-on Experience",
  skillsHeading: "Technical Skills",
  skills: [
    {
      title: "Languages",
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
      title: "Frameworks & Libraries",
      items: [
        "React",
        "Angular",
        "Vue",
        "Node.js",
        "FastAPI",
        ".NET Core",
        "WPF",
        "Entity Framework",
        "Bootstrap",
      ],
    },
    {
      title: "Databases",
      items: ["SQL Server", "MongoDB"],
    },
    {
      title: "Development Tools & Platforms",
      items: ["GitHub", "Linux", "Windows", "Railway", "Netlify", "Render", "Arduino"],
    },
    {
      title: "AI Development Tools",
      items: ["Copilot", "Cursor", "ChatGPT", "Claude", "Gemini"],
    },
  ],
  education: "MAHAT, Practical Software Engineering Studies, 2024–2026",
  projectsIntro: "A selection of full-stack and AI-powered applications I built.",
  projectsNote:
    "My projects demonstrate my practical development experience, problem-solving skills, and ability to build real-world software solutions using modern technologies.",
};

export function getSiteUrl(): URL {
  return new URL(profile.siteUrl);
}
