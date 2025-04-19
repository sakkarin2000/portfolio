import SectionContainer from "../components/shared/SectionContainer";
import { techStackData } from "../constants/technicalSkillsData";

const TechStack = () => {
  return (
    <SectionContainer title="TECHNICAL PROFICIENCIES">
      <ul className="space-y-2 text-gray-800">
        {Object.entries(techStackData).map(([topic, techs]) => (
          <li key={topic}>
            <span className="font-semibold text-gray-700">{topic}:</span>{" "}
            {techs
              .sort((a, b) => b.proficiency - a.proficiency)
              .map((tech) => tech.name)
              .join(", ")}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default TechStack;
