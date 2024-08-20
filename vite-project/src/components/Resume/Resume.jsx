import "./Resume.css";

const Resume = ({ personalInfo, educationInfo, experienceInfo }) => {
  console.log("🚀 ~ Resume ~ personalInfo:", personalInfo)
  // console.log(personalInfo);
  return (
    <div className="resume-section">
      <div className="personalInfo-section">
        <h1>Personal</h1>
        {personalInfo.map(({ id, value }) => (
          <div key={id} className="personalInfo-value">
            <h2>{value}</h2>
          </div>
        ))}
      </div>
      <hr />
      <div className="experience-section">
        {experienceInfo.map(({ id, value, name }) => (
          <div key={id} className="experience-value">
            <h2>{value}</h2>
          </div>
        ))}
        <hr />
        <div className="education-section">
          <h1>Education</h1>
          {educationInfo.map(({ id, value, name }) => (
            <div key={id} className="education-value">
              <h2>{value}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
