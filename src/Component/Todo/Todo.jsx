import React, { useState } from "react";
import Interface from "./Interface"; // Todo Component
import Form1 from "./Form1"; // Login Component
import Form2 from "./Form2"; // Signup Component

const Todo = () => {
  const [data, setData] = useState(1); // Default page is Todo

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === "todo" && <Interface onLoginClick={() => handleNavigation("login")} />}
      {currentPage === "login" && (
        <Form1
          onCreateAccountClick={() => handleNavigation("signup")}
          onBackToTodoClick={() => handleNavigation("todo")}
        />
      )}
      {currentPage === "signup" && <Form2 onBackToLoginClick={() => handleNavigation("login")} />}
    </div>
  );
};

export default Todo;
