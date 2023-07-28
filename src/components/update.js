import React, { useState , useEffect } from "react";
import axios from 'axios';
import Home from "./home";
import {  Checkbox } from "semantic-ui-react";

function Update() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
 
const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setGender(localStorage.getItem('Gender'))
}, []);
const updateAPIData = () => {
  axios.put(`https://64b9142879b7c9def6c08b49.mockapi.io/users/${id}`, {
      name,
      age,
      gender
})
alert("Item has been Updated!");

}
  return (
    <>
      <Home />
      <h2>Update Operation</h2>
      <div className="input">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <Checkbox label="I agree to the Terms and Conditions" />
      <button type="submit"onClick={updateAPIData}>Update</button>
      </div>
    </>
  );
}
export default Update;
