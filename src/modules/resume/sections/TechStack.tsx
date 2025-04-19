import SectionContainer from "../components/shared/SectionContainer";

const TechStack = () => {
  return (
    <SectionContainer title="Tech Stack">
      <ul className="space-y-2 text-gray-800">
        <li>
          <span className="font-semibold text-gray-700">
            Languages & Runtime:
          </span>{" "}
          TypeScript, JavaScript, NodeJS, SQL, Java, Python, Dart
        </li>
        <li>
          <span className="font-semibold text-gray-700">
            Frameworks & Libraries:
          </span>{" "}
          NestJS, KoaJS, ExpressJS, FastAPI, Flask, Spring Boot, React, Vue2,
          Flutter, React Query, Zustand, Mobx
        </li>
        <li>
          <span className="font-semibold text-gray-700">
            Styling & Bundler:
          </span>{" "}
          Tailwind CSS, CSS, Webpack, Rspack, Module Federation, Bun, Yarn
        </li>
        <li>
          <span className="font-semibold text-gray-700">
            DevOps & Deployment:
          </span>{" "}
          Docker, K3s, Nginx, Jenkins, GitLab CI/CD
        </li>
        <li>
          <span className="font-semibold text-gray-700">
            API & Architecture:
          </span>{" "}
          RESTful API, Cronjob, Microservices, Clean Architecture
        </li>
        <li>
          <span className="font-semibold text-gray-700">Documentations:</span>{" "}
          OpenAPI, D2lang, MermaidJS, Excalidraw, Gitlab Markdown
        </li>
        <li>
          <span className="font-semibold text-gray-700">Tools & Others:</span>{" "}
          Git, GitLab, GitHub, Jira, Bruno, Postman
        </li>
      </ul>
    </SectionContainer>
  );
};

export default TechStack;
