import "./App.css";
import { careerExperiences } from "./components/CareerExperience/careerExperience";
import { CareerItem } from "./components/CareerExperience/CareerItem";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8 md:px-10 font-sans">
      <main
        className="max-w-3xl mx-auto border border-gray-300 p-6 md:p-10 space-y-8"
        role="main"
      >
        {/* Header */}
        <header className="text-center border-b border-gray-300 pb-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Sakkarin Poolsuk
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            Software Engineer specializing in designing and developing reliable
            software systems with clean architecture.
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
              Bachelor of Science in Computer Science, School of Information
              Technology, King Mongkut's University of Technology Thonburi
            </li>
            <li>Graduated with a cumulative GPA of 3.32</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
            Technical Skills
          </h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <span className="font-semibold text-gray-700">
                Languages & Runtime:
              </span>{" "}
              TypeScript, JavaScript, Python, Java, Node.js
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                Frameworks & Libraries:
              </span>{" "}
              Express, Koa, NestJS, FastAPI, Flask, Spring Boot, React, Vue 2,
              Flutter, StencilJS
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
                Tools & Others:
              </span>{" "}
              Git, GitLab, GitHub
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-gray-300 pt-6 text-sm text-gray-500">
          © 2025 Sakkarin Poolsuk. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
