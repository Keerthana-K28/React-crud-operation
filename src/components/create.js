import React, { useState } from "react";
import Home from "./home";
import axios from 'axios';
import { Checkbox } from "semantic-ui-react";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError(false);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    setError(false);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setError(false);
  };
  const handleCreate = () => {
    handleSubmit(); 
    postData()
  }
const postData = () => {
  axios.post(`https://64b9142879b7c9def6c08b49.mockapi.io/users`, {
      name,
      age,
      gender
  })
}

  const handleSubmit = () => {
    if (name.trim() === "" || age.trim() === "" || gender.trim() === "") {
      setError(true);
      return;
    }
    console.log("name:", name, "age:", age, "gender:", gender);
    alert("Item has been created!");

    setName("");
    setAge("");
    setGender("");
    setError(false);
  };
  return (
    <>
      <Home />
      <h2>Create Operation</h2>
      <div className="input">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        {error && name.length <= 0 ? <label> required*</label> : ""}

        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={handleAgeChange}
        />
        {error && age.length <= 0 ? <label> required*</label> : ""}
        <input
          type="text"
          placeholder="gender"
          value={gender}
          onChange={handleGenderChange}
        />
        {error && gender.length <= 0 ? <label> required*</label> : ""}
        <div>
          <Checkbox label="I agree to the Terms and Conditions" />
        </div>
        <button type="button" onClick={handleCreate}>
          create
        </button>
      </div>
    </>
  );
}

export default Create;
