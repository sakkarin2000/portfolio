import { ICareerExperience } from "../components/career-experience/ICareerExperience";

export const careerExperiences: ICareerExperience[] = [
  {
    role: "Software Engineer",
    company: "Nipa Technology Co., Ltd.",
    description: [
      "Developed and maintained microservices for Nipa Cloud Platform, including the Identity Service, Feature Flag Service and Nipa Cloud Space.",
      "Applied domain-driven design principles, followed RESTful API standards, and implemented with best development practices.",
      "Contributed to the Platform Team within the Cloud Development Department; experimented with code standards and tools—such as OpenAPI Spec—for API design and documentation to support adoption across multiple teams and services.",
    ],
    startDate: "2023-03-20",
  },
  {
    role: "Information System Intern",
    company: "Ajinomoto (Thailand) Co., Ltd.",
    description: [
      "Maintained and updated the network diagram of the Head Office using SolarWinds.",
      "Monitored network switches to ensure infrastructure stability.",
      "Designed a solution for Office365 deployment using batch script.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-07-31",
  },
];
