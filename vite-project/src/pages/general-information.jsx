// import { useState } from "react";

// function GeneralInformation() {
//   const [inputs, setInputs] = useState({});

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted form", inputs);
//     setInputs("");
//   };

//   const inputFields = [
//     {
//       label: "First Name",
//       name: "firstName",
//       placeholder: "First Name",
//       type: "text",
//     },
//     {
//       label: "Last Name",
//       name: "lastName",
//       placeholder: "Last Name",
//       type: "text",
//     },
//     {
//       label: "Email",
//       name: "email",
//       placeholder: "example@gmail.com",
//       type: "email",
//     },
//     {
//       label: "Phone",
//       name: "phone",
//       placeholder: "###-###-####",
//       type: "tel",
//     },
//   ];

//   const renderInputs = inputFields.map((field, i) => {
//     return (
//       <div key={i}>
//         <label>{field.label}</label>
//         <input
//           type={field.type}
//           name={field.name}
//           placeholder={field.placeholder}
//           value={inputs[field.name] || ""}
//           onChange={inputHandler}
//         />
//       </div>
//     );
//   });

//   return (
//     <form onSubmit={handleSubmit}>
//       {renderInputs}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default GeneralInformation;
