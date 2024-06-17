

const PracticalExperience = ({experienceInfo, setExperienceInfo}) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((prevState) =>
      prevState.map((experience) =>
        experience.name === name ? { ...experience, value } : experience
      )
    );
  };

  return (
    <>
      {experienceInfo.map(({ id, type, value, name, label }) => (
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

export default PracticalExperience;
