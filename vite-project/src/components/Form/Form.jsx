import EducationExperience from "../EducationExperience/EducationExperience";
import GeneralInformation from "../GeneralInformation/GeneralInformation";
import PracticalExperience from "../PracticalExperience/PracticalExperience";

const Form = ({
  personalInfo,
  setPersonalInfo,
  experienceInfo,
  setExperienceInfo,
  educationInfo,
  setEducationInfo,
}) => {
  return (
    <div>
      <GeneralInformation
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <hr />
      <EducationExperience
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <hr />
      <PracticalExperience
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
    </div>
  );
};

export default Form;
