
const GeneralInformation = ({personalInfo, setPersonalInfo}) => {
// console.log(personalInfo,"personal");


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
      {personalInfo.map(({ id, type, value, name, label, }) => (
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

export default GeneralInformation;
