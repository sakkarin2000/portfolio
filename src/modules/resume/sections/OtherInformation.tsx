import SectionContainer from "../components/shared/SectionContainer";

const OtherInformation = () => {
  return (
    <SectionContainer title="Other Information">
      <ul className="space-y-2 text-gray-800">
        <li>
          <span className="font-semibold text-gray-700">Language skills:</span>{" "}
          Thai (native), English (intermediate, TOEIC 650 - expired)
        </li>
        <li>
          <span className="font-semibold text-gray-700">Hobbies:</span> Playing
          Guitar, Singing, and Wooden Crafting
        </li>
      </ul>
    </SectionContainer>
  );
};

export default OtherInformation;
