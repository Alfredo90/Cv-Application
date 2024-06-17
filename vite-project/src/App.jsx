import "./App.css";

import Form from "./components/Form/Form";
import Resume from "./components/Resume/Resume";
import educationData from "./components/DummyData/EducationData";
import experienceData from "./components/DummyData/ExperienceData";
import personalData from "./components/DummyData/PersonalData";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState(personalData);
  // console.log(personalInfo)
  const [experienceInfo, setExperienceInfo] = useState(experienceData);
  // console.log(experienceInfo)
  const [educationInfo, setEducationInfo] = useState(educationData);
  // console.log(educationInfo)

  return (
    <div className="main-contianer">
      <Form
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <Resume
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </div>
  );
}

export default App;
