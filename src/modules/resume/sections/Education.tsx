import SectionContainer from "../components/shared/SectionContainer";

const Education = () => {
  return (
    <SectionContainer title="EDUCATION">
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        <li className="list-disc list-outside pl-2 text-md text-gray-700">
          <span className="font-semibold text-gray-900">
            B.Sc. in Computer Science (English Program)
          </span>
          <br />
          <span className="text-sm">
            (2nd class honours with GPA: 3.32)
          </span>
          <br />
          <span className="text-sm italic">
            School of Information Technology, King Mongkut's University of Technology Thonburi (KMUTT)
          </span>
          

          <div className="mt-3 ml-1 pl-3 border-l-2 border-gray-300">
            <p className="text-sm font-semibold text-gray-800">
              Senior Project: Activity Recommendation System
            </p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Developed a full-stack activity recommendation system using{" "}
              <span className="font-medium text-gray-800">NextJS (TypeScript)</span>{" "}
              and <span className="font-medium text-gray-800">Python (Flask)</span>.
              Designed to support student activity tracking with the university CI theme and 
              database schema.
            </p>
          </div>
        </li>
      </ul>
    </SectionContainer>
  );
};

export default Education;