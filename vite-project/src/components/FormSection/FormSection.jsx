import EducationInfo from "../EducationInfo/EducationInfo";
import EmploymentInfo from "../EmploymentInfo/EmploymentInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import dummyData from "../../data/dummyData";
import { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState(dummyData);

  const handleFormChange = (section, field, value) => {
    // 1. Get the current data for the specific section (e.g., "employmentForm")
    const currentSection = formData[section];

    // 2. Create a new version of the section with the updated field
    const updatedSection = {
      ...currentSection, // Copy everything from the current section
      [field]: value, // Update only the specific field
    };

    // 3. Create a new version of the entire formData object
    const updatedFormData = {
      ...formData, // Copy everything from the current formData
      [section]: updatedSection, // Replace the updated section
    };

    // 4. Update the state with the new formData object
    setFormData(updatedFormData);
  };

  return (
    <div>
      <PersonalInfo
        personalData={formData.personalInfo}
        handleChange={handleFormChange}
      />
      <EmploymentInfo
        emplomentData={formData.employmentInfo}
        handleChange={handleFormChange}
      />
      <EducationInfo
        educationData={formData.educationInfo}
        handleChange={handleFormChange}
      />
    </div>
  );
};

export default FormSection;
