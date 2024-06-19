const PracticalExperience = ({ experienceInfo, setExperienceInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceInfo(experienceInfo);
    console.log("submiting form");
  };

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
      <form action="" onSubmit={handleSubmit}>
        {experienceInfo.map(({ id, type, value, name, label }) => (
          <div key={id}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PracticalExperience;
