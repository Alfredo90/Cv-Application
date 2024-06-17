

const EducationExperience = ({ educationInfo, setEducationInfo }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prevState) =>
      prevState.map((education) =>
        education.name === name ? { ...education, value } : education
      )
    );
  };

  return (
    <>
      {educationInfo.map(({ id, type, value, name, label }) => (
        <form key={id} action="">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            required
          />
        </form>
      ))}
    </>
  );
};

export default EducationExperience;
