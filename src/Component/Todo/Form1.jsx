import React from "react";

const Form1 = () => {
  return (
    <div className="w-screen ">
      <div className="flex w-[80%] border mx-auto">
        <div className="w-[40%] bg-green-800 border flex flex-col text-white p-8">
          <div className="text-3xl font-bold">Login</div>
          <div className="mt-8 font-semibold">
            Stay organized by accessing your Tasks, Priorities, and Deadlines
            all in one place.
          </div>
          <div className="flex mt-10 rounded-xl justify-center">
            <img
              src="https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png"
              alt=""
              srcset=""
              className="w-[60%] border rounded-lg border-green-800"
            />
          </div>
        </div>
        <div className="w-[60%] border-3 ">
          <form className="grid grid-cols-1 mt-28 w-[50%] mx-auto ">
            <input
              type="text"
              placeholder="Enter Your Email "
              className="  border-b-3  h-10 placeholder:pl-3 border-b-2"
            />
            <input
              type="password"
              placeholder="Enter Your Password "
              className="mt-5 h-10 placeholder:pl-3  border-b-2"
            />
            <div className="bg-green-800 text-white mx-auto text-center text-xl font-semibold p-3 rounded-md mt-5 w-[100%] ">
              Login
            </div>
            <div>
              or{" "}
              <span className="text-green-800 font-semibold">
                create an account
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
