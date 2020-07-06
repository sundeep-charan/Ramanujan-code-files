import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import "../styles/HelpForm.css";

const HelpForm = () => (
  <form className="HelpForm">
    <InputField
      inputProps={{
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
        value: ""
      }}
    />
    <InputField
      inputProps={{
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        required: true,
        value: ""
      }}
    />
    <Button type="submit" background="green" value="Submit" />
  </form>
);

export default HelpForm;
