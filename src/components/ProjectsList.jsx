import Project from "./Project";

export default function ProjectsList() {
  const projects = [
    {
      title: "5 BHK",
      description:
        "Real estate platform for luxury property listings and management with advanced search and booking features.",
      img: "5bhk.png",
      techStack: [
        "React Native",
        "JavaScript",
        "Real Estate",
        "Property Management",
        "Search Functionality",
        "Booking System",
      ],
      github: "https://github.com/MazahirAli545/5BHK",
    },
    {
      title: "Rangrez Samaj",
      description:
        "Community platform for the Rangrez community with social features, events, and member management. Frontend and Backend repositories available.",
      img: "rangrez-samaj.png",
      techStack: [
        "React Native",
        "JavaScript",
        "Community Platform",
        "Social Features",
        "Event Management",
        "Member Directory",
      ],
      github: "https://github.com/MazahirAli545/Rangrez-Samaj",
    },
    {
      title: "Smart Ledger",
      description:
        "AI-powered business accounting app with expense tracking, customer management, and financial analytics. Cross-platform mobile application built with React Native.",
      img: "smart-ledger.png",
      techStack: [
        "React Native",
        "TypeScript",
        "Financial Management",
        "Expense Tracking",
        "Customer Management",
        "AI Integration",
      ],
      github: "https://github.com/MazahirAli545/Smart-Ledger",
    },
    {
      title: "Instagram Clone",
      description:
        "Social media application with photo sharing, stories, messaging, and social networking features.",
      img: "instagram-clone.png",
      techStack: [
        "React Native",
        "JavaScript",
        "Social Media",
        "Photo Sharing",
        "Real-time Messaging",
        "Stories Feature",
      ],
      github: "https://github.com/MazahirAli545/instagram-clone",
    },
    {
      title: "We Unite",
      description:
        "Community-driven mobile app empowering women through business, education, and networking. Available on Apple App Store.",
      img: "weunite-app.webp",
      techStack: [
        "React Native",
        "JavaScript",
        "iOS",
        "Mobile Development",
        "Community Platform",
        "Women Empowerment",
      ],
      link: "https://apps.apple.com/in/app/we-unite/id6502939928",
      featured: true,
    },
  ];
  return (
    <div className="projects-section">
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}
