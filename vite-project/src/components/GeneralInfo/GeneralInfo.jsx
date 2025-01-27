/* eslint-disable react/prop-types */
const GeneralInfo = ({ inputValue, handleChange }) => {
  const renderValues = inputValue.map((field) => (
    <div key={field.name}>
      <label htmlFor={field.name}>{field.title}</label>
      <input
        type={field.type}
        value={field.value}
        placeholder={field.placeholder}
        name={field.name}
        onChange={handleChange}
      />
    </div>
  ));

  return <div>{renderValues}</div>;
};

export default GeneralInfo;
