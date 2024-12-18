import React from "react";

const Form2 = () => {
  return (
    <div className="w-screen ">
      <div className="flex w-[80%] border mx-auto">
        <div className="w-[40%] bg-green-800 border flex flex-col text-white p-8">
          <div className="text-3xl font-bold">Signup</div>
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
          <form className=" w-[90%] mx-auto ">
            <div className="grid grid-cols-2  mt-20 gap-8">
              <input
                type="text"
                placeholder="Enter your First Name "
                className="  border-b-3  h-10 placeholder:pl-3 border-b-2"
              />
              <input
                type="password"
                placeholder="Enter your Last Name "
                className=" h-10 placeholder:pl-3  border-b-2"
              />
              <input
                type="password"
                placeholder="Enter your Email "
                className=" h-10 placeholder:pl-3  border-b-2"
              />
              <input
                type="password"
                placeholder="Enter Password "
                className=" h-10 placeholder:pl-3  border-b-2"
              />
            </div>
            <div className="bg-green-800 text-white mx-auto text-center text-xl font-semibold p-3 rounded-md mt-8 w-[80%] ">
              Signup
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
