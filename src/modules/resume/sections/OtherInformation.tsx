import SectionContainer from "../components/shared/SectionContainer";

const OtherInformation = () => {
  return (
    <SectionContainer title="OTHER INFORMATION">
      <ul className="space-y-2 text-gray-800">
        <li>
          <span className="font-semibold text-gray-700">Language skills:</span>{" "}
          Thai (native), English (Upper Intermediate, TOEIC 785 - CEFR B2)
        </li>
        <li>
          <span className="font-semibold text-gray-700">Hobbies:</span>{" "}
          Playing Guitar and Singing, Badminton, Table Tennis, Running, Traveling, Reading self-help books
        </li>
      </ul>
    </SectionContainer>
  );
};

export default OtherInformation;
