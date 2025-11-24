import SectionContainer from "../components/shared/SectionContainer";
import { techStackData } from "../constants/technicalSkillsData";

const TechStack = () => {
  return (
    <SectionContainer title="TECHNICAL PROFICIENCIES">
      <div className="space-y-3 text-gray-800">
        {Object.entries(techStackData).map(([topic, techs]) => (
          <div key={topic} className="flex flex-col sm:flex-row sm:items-baseline">
            <span className="font-bold text-gray-900 w-full sm:w-1/4 shrink-0 mb-1 sm:mb-0">
              {topic}
            </span>
            <div className="w-full sm:w-3/4">
              <span className="text-gray-700 leading-relaxed">
                {techs
                  .sort((a, b) => b.proficiency - a.proficiency)
                  .map((tech) => tech.name)
                  .join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TechStack;