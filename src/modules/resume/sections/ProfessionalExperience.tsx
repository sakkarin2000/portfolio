import { careerExperiences } from "../constants/careerExperience";
import { CareerItem } from "../components/career-experience/CareerItem";
import SectionContainer from "../components/shared/SectionContainer";

const ProfessionalExperience: React.FC = () => {
  return (
    <SectionContainer title="PROFESSIONAL EXPERIENCE">
      <ul className="list-disc list-inside space-y-6 text-gray-800">
        {careerExperiences.map((exp, i) => (
          <CareerItem key={i} experience={exp} />
        ))}
      </ul>
    </SectionContainer>
  );
};

export default ProfessionalExperience;
