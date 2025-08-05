import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "OneCompiler",
      description:
        "I have 3+ years of experience developing and maintaining an online IDE platform supporting 60+ programming languages with real-time code execution and sandboxing. Contributed to scaling the platform to serve millions of users globally with high availability and performance.",
      techStack: ["React", "Next.js", "React Native", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/onecompiler",
      demoUrl: "https://onecompiler.com",
    },
    {
      title: "Rtzen",
      description:
        "Developed and maintained a fintech platform providing innovative financial solutions and services. Built scalable backend services and intuitive user interfaces for seamless financial transactions and management.",
      techStack: ["React", "Node.js", "TypeScript", "Redux", "PostgreSQL"],
      demoUrl: "https://rtzen.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've built and contributed to, focusing on
            scalable systems, developer tools, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
