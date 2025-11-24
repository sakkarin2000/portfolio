export const techStackData: Record<
  string,
  { name: string; proficiency: number }[]
> = {
  "Languages & Core": [
    { name: "TypeScript", proficiency: 6 },
    { name: "JavaScript", proficiency: 6 },
    { name: "Node.js", proficiency: 6 },
    { name: "SQL", proficiency: 5 },
    { name: "Java", proficiency: 3 },
  ],
  Backend: [
    { name: "NestJS", proficiency: 6 },
    { name: "KoaJS", proficiency: 5 },
    { name: "ExpressJS", proficiency: 5 },
    { name: "Bun", proficiency: 4 },
    { name: "Spring Boot", proficiency: 3 },
    { name: "FastAPI", proficiency: 3 },
  ],
  Frontend: [
    { name: "React", proficiency: 6 },
    { name: "Tailwind CSS", proficiency: 6 },
    { name: "Vue 2", proficiency: 5 },
    { name: "React Query", proficiency: 5 },
    { name: "Zustand", proficiency: 4 },
  ],
  "Build & Monorepo Tools": [
    { name: "Rspack", proficiency: 5 },
    { name: "Webpack", proficiency: 4 },
    { name: "TurboRepo", proficiency: 4 },
    { name: "Module Federation", proficiency: 3 },
    { name: "Yarn Workspaces", proficiency: 5 },
  ],
  "Database, Caching & Messaging": [ 
    { name: "MySQL", proficiency: 5 },
    { name: "PostgreSQL", proficiency: 5 },
    { name: "Redis", proficiency: 4 },
    { name: "Amazon S3", proficiency: 4 },
    { name: "RabbitMQ", proficiency: 3 },
  ],
  "Architecture & Documentation": [
    { name: "OpenAPI (Swagger)", proficiency: 6 },
    { name: "Onion Architecture", proficiency: 5 },
    { name: "Microservices", proficiency: 4 },
    { name: "MermaidJS", proficiency: 5 },
    { name: "Excalidraw", proficiency: 5 },
  ],
  "DevOps & Infrastructure": [
    { name: "Docker", proficiency: 5 },
    { name: "Nginx", proficiency: 4 },
    { name: "GitLab CI/CD", proficiency: 4 },
    { name: "K3s (Kubernetes)", proficiency: 3 },
    { name: "OpenStack", proficiency: 3 },
    { name: "Nipa Cloud", proficiency: 3 },
    { name: "AWS EC2", proficiency: 3 },
    { name: "Git", proficiency: 6 },
  ],
};