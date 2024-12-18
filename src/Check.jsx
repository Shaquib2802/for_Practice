import React, { useState } from "react";
import { LoginPage } from "./Services/Login.jsx";

const Check = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target.value);

    setData(() => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login();

    console.log("data", data);
  };

  const Login = async () => {
    const data1 = await LoginPage(data);

    console.log(data1);

    if (data1?.status === 200) {
      alert("login sucessfully");
    }
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={data.username}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Check;
