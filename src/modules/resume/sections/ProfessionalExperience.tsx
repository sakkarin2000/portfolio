import { careerExperiences } from "../components/career-experience/careerExperience";
import { CareerItem } from "../components/career-experience/CareerItem";
import SectionContainer from "../components/shared/SectionContainer";

const ProfessionalExperience: React.FC = () => {
  return (
    <SectionContainer title="Professional Experience">
      <ul className="list-disc list-inside space-y-6 text-gray-800">
        {careerExperiences.map((exp, i) => (
          <CareerItem key={i} experience={exp} />
        ))}
      </ul>
    </SectionContainer>
  );
};

export default ProfessionalExperience;
