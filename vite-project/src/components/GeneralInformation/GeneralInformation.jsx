const GeneralInformation = ({ personalInfo, setPersonalInfo }) => {
  // console.log(personalInfo,"personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo(personalInfo);
    console.log("submiting form");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) =>
      prevState.map((information) =>
        information.name === name ? { ...information, value } : information
      )
    );
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {personalInfo.map(({ id, type, value, name, label }) => (
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

export default GeneralInformation;
