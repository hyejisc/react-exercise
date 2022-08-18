import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h2>Username</h2>
      <input type="text" onChange={nameHandler} />
      <h2>Age(Years)</h2>
      <input type="number" onChange={ageHandler} />
    </div>
  );
};

export default User;
