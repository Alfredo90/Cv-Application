import React, { useState } from "react";

const array = [
  { id: 0, type: "text", value: "", name: "firstName", label: "First Name" },
  { id: 1, type: "text", value: "", name: "lastName", label: "Last Name" },
  { id: 2, type: "email", value: "", name: "email", label: "Email" },
  { id: 3, type: "tel", value: "", name: "phone", label: "Phone", pattern : "[0-9]{3}-[0-9]{3}-[0-9]{4}" },
];

const GeneralInformation = () => {
  const [inputValues, setInputValues] = useState(array);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) =>
      prevState.map((inputValue) =>
        inputValue.name === name ? { ...inputValue, value } : inputValue
      )
    );
  };

  return (
    <>
      {inputValues.map(({ id, type, value, name, label, pattern  }) => (
        <form key={id} action="">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            pattern={pattern}
            onChange={handleInputChange}
            required
          />
        </form>
      ))}
    </>
  );
};

export default GeneralInformation;
