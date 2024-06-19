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
      <PracticalExperience
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <hr />
      <EducationExperience
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
    </div>
  );
};

export default Form;
