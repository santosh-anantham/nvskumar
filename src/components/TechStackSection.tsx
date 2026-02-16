import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cog, Layers, Monitor } from "lucide-react";

const TechStackSection = () => {
  const techStacks = [
    {
      category: "Frontend Development",
      icon: <Layers className="h-5 w-5" />,
      technologies: [
        "ReactJS",
        "Next.js",
        "Redux",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Material UI",
        "Kendo UI",
        "Tailwind CSS",
        "React Native",
        "Electron",
      ],
    },
    {
      category: "Databases & Queues",
      icon: <Database className="h-5 w-5" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "Monitoring & Tools",
      icon: <Monitor className="h-5 w-5" />,
      technologies: [
        "ELK Stack",
        "Prometheus",
        "Grafana",
        "NewRelic",
        "Terraform",
        "GitHub Actions",
        "GitLab CI/CD",
        "Postman",
        "Swagger/OpenAPI",
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5+ years of experience across frontend, backend. Specialized in
            building scalable systems and leading full-stack engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {techStacks.map((stack) => (
            <Card
              key={stack.category}
              className="card-gradient hover-lift border-border/50 h-full"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {stack.icon}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {stack.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
