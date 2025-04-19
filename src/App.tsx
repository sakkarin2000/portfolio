import { useReactToPrint } from "react-to-print";
import "./App.css";
import { careerExperiences } from "./components/CareerExperience/careerExperience";
import { CareerItem } from "./components/CareerExperience/CareerItem";
import { useRef } from "react";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: contentRef,
    pageStyle: `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
  
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
  
        .no-print {
          display: none !important;
        }
      }
    `,
    documentTitle: `${"Sakkarin Poolsuk".replace(/\s/g, "-")}-Resume`,
    onPrintError: () => alert("there is an error when printing"),
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8 md:px-10 font-sans">
      {/* Print Button with Font Awesome Icon */}
      <button
        className="no-print fixed top-4 right-4 bg-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => reactToPrintFn()}
      >
        <i className="fa fa-print text-xl text-gray-600"></i>
      </button>

      <main
        ref={contentRef}
        className="max-w-4xl mx-auto p-6 md:p-10 space-y-8"
        role="main"
      >
        {/* Header */}
        <header className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            Sakkarin Poolsuk
          </h3>
          <div
            className="flex flex-col md:flex-row justify-center md:gap-6 mt-2 text-sm md:text-base text-gray-600"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <p>
              Email:{" "}
              <a href="mailto:sakkarin2000@gmail.com" className="underline">
                sakkarin2000@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+66854050743" className="underline">
                +66 854050743
              </a>
            </p>
          </div>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            "Passionate about software craftsmanship, with a focus on writing
            clean, maintainable code and building scalable solutions."
          </p>
        </header>

        {/* Experience Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
            Professional Experience
          </h2>
          <ul className="list-disc list-inside space-y-6 text-gray-800">
            {careerExperiences.map((exp, i) => (
              <CareerItem key={i} experience={exp} />
            ))}
          </ul>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              B.Sc. in Computer Science (2nd class honours with GPA: 3.32)
              <br />
              School of Information Technology, King Mongkut's University of
              Technology Thonburi
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
            Tech Stack
          </h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <span className="font-semibold text-gray-700">
                Languages & Runtime:
              </span>{" "}
              TypeScript, JavaScript, Python, Java, Node.js, SQL
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                Frameworks & Libraries:
              </span>{" "}
              Express, Koa, NestJS, FastAPI, Flask, Spring Boot, React, Vue 2,
              Flutter, StencilJS, React Query, Zustand, Mobx
            </li>
            <li>
              <span className="font-semibold text-gray-700">Styling & UI:</span>{" "}
              Tailwind CSS, Webpack, Rspack, Module Federation
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
              OpenAPI, RESTful API, Microservices, Clean Architecture
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                Documentations:
              </span>{" "}
              OpenAPI, D2lang, MermaidJS, Excalidraw, Gitlab Markdown
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                Tools & Others:
              </span>{" "}
              Git, GitLab, GitHub, Jira, Bruno, Postman
            </li>
          </ul>
        </section>

        {/* Footer */}
      </main>
      <footer className="no-print text-center border-gray-300 pt-6 text-sm text-gray-500">
        © 2025 Sakkarin Poolsuk. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
