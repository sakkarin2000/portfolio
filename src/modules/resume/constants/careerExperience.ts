import { ICareerExperience } from "../components/career-experience/ICareerExperience";

export const careerExperiences: ICareerExperience[] = [
  {
    role: "Software Engineer",
    company: "Nipa Technology Co., Ltd. (Nipa Cloud)",
    description: [
      "Develop and maintain core microservices e.g., Identity Service, Feature Flag Service from the ground up using Node.js (TypeScript) with Koa, TypeDI, and Routing-Controllers (NestJS like architecture), adhering to Clean Architecture principles to ensure modularity, maintainability and testability.",
      "Refactor existing legacy codebases to improve performance, readability, and reduce technical debt.",
      "Apply design patterns and best practices to enhance code maintainability and scalability across services.",
      "Established an OpenAPI-first strategy for API design, enforcing consistent contracts that enabled seamless integration between teams and ensure the business requirements are met effectively.",
      "Troubleshot and resolve production issues spanning service logic, deployment, and infrastructure, ensuring platform stability and reliability.",
      "Developed administration tools using React, for internal usage to streamlined multi-hierarchy configuration, feature flags and email notification template management which improved platform operational efficiency."
    ],
    startDate: "2023-03-20"
  },
  {
    role: "Information System Intern",
    company: "Ajinomoto (Thailand) Co., Ltd.",
    description: [
      "Designed and implemented an automated solution for Office365 deployment using batch scripts, reducing manual setup time.",
      "Monitored network infrastructure stability and maintained complex network diagrams using SolarWinds.",
      "Participated the network design laboratory project as a foundation of network components and architecture understanding, using Cisco Packet Tracer."
    ],
    startDate: "2022-06-01",
    endDate: "2022-07-31"
  }
];
