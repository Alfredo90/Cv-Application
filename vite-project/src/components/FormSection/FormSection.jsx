import EmployInfo from "../EmploymentInfo/EmployInfo";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import { useState } from "react";

const FormSection = () => {
  const [inputValue, setInputValue] = useState([
    {
      name: "firstName",
      value: "",
      type: "text",
      placeholder: "first name",
      title: "First Name",
    },
    {
      name: "lastName",
      value: "",
      type: "text",
      placeholder: "last name",
      title: "Last Name",
    },
    {
      name: "email",
      value: "",
      type: "email",
      placeholder: "example@gmail.com",
      title: "Email",
    },
    {
      name: "phone",
      value: "",
      type: "tel",
      placeholder: "xxx-xxx-xxxx",
      title: "Phone",
    },
  ]);

  //Function to update the value of any specific input field.
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event

    setInputValue((prevState) =>
      prevState.map(
        (input) => (input.name === name ? { ...input, value: value } : input) // Update the matching input field
      )
    );
  };

  //  Function to handle form submission.
  //    Prevents the default behavior (page reload) and logs the form data to the console.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", inputValue);
    setInputValue(inputValue.map((input) => ({ ...input, value: "" })));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <GeneralInfo
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleChange={handleChange}
        />
        <EmployInfo />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSection;
