import { ICareerExperience } from "../components/career-experience/ICareerExperience";

export const careerExperiences: ICareerExperience[] = [
  {
    role: "Software Engineer",
    company: "Nipa Technology Co., Ltd.",
    description: [
      "Developed core microservices—specifically the Identity and Feature Flag services—from the ground up using Node.js (TypeScript) with Koa, TypeDI, and Routing-Controllers (similar to NestJS architecture), adhering to Onion Architecture principles to ensure modularity.",
      "Designed and developed internal administration tools using React, which streamlined multi-hierarchy configuration management and improved operational efficiency.",
      "Initiated an OpenAPI-first approach for API design, enforcing consistent contracts that enabled seamless integration between teams.",
      "Optimized backend workflows by implementing Redis caching strategies. Enforced concurrency control to prevent race conditions and duplicate resource creation during project provisioning.",
      "Troubleshot and resolved production issues spanning service logic, deployment, and infrastructure, ensuring platform stability and reliability."
    ],
    startDate: "2023-03-20"
  },
  {
    role: "Full Stack Consultant (Freelance)", 
    company: "Project: NEO Skill Test",
    description: [
      "Partnered with the lead developer to design the backend architecture and implemented complex modules including exam creation, dynamic score calculation, and examination reporting using NextJS and Node.js.",
      "Established the deployment strategies using Docker and Nginx on Amazon S3, enabling the project to go live securely and efficiently."
    ],
    startDate: "2023-01-12",
    endDate: "2023-02-15"
  },
  {
    role: "Information System Intern",
    company: "Ajinomoto (Thailand) Co., Ltd.",
    description: [
      "Designed and implemented an automated solution for Office365 deployment using batch scripts, reducing manual setup time.",
      "Monitored network infrastructure stability and maintained complex network diagrams using SolarWinds.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-07-31"
  }
];