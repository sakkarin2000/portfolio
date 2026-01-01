import { ICareerExperience } from "../components/career-experience/ICareerExperience";

export const careerExperiences: ICareerExperience[] = [
  {
    role: "Software Engineer",
    company: "Nipa Technology Co., Ltd. (Nipa Cloud)",
    description: [
      "Developed and maintain core microservices e.g., Identity Service, Feature Flag Service from the ground up using Node.js (TypeScript) with Koa, TypeDI, and Routing-Controllers (NestJS like architecture), adhering to Clean Architecture principles to ensure modularity, maintainability and testability.",
      "Refactored existing legacy codebases to improve performance, readability, and reduce technical debt",
      "Apply design patterns and best practices to enhance code maintainability and scalability across services.",
      "Initiated an OpenAPI-first approach for API design, enforcing consistent contracts that enabled seamless integration between teams and ensure the business requirements are met effectively.",
      "Troubleshot and resolved production issues spanning service logic, deployment, and infrastructure, ensuring platform stability and reliability.",
      "Collaborated closely with cross-functional teams including DevOps, QA, and Product Owner to deliver high-quality software solutions on time.",
      "Designed and developed administration tools using React, for internal usage and streamlined multi-hierarchy configuration, feature flags and email notification template management which improved platform operational efficiency.",
    ],
    startDate: "2023-03-20"
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Project: NEO Skill Test",
    description: [
      "Architected the backend architecture and implemented core modules' logic of the web application e.g., exam creation, dynamic score calculation, and examination reporting using NextJS and Node.js.",
      "Integrated the backend and frontend components to ensure seamless user experience and working functionality.",
      "Conduct the deployment of the developed application using Docker and Nginx on Amazon S3, enabling the project to go live securely and efficiently."
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
      "Participated the network design laboratory project as a foundation of network components and architecture understanding, using Cisco Packet Tracer.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-07-31"
  }
];
