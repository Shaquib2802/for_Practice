import React, { useState } from "react";
import "./index.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ModeIcon from "@mui/icons-material/Mode";
import { useFormik } from "formik";
import { Registration } from "../../Services/Register";

const Interface = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",

      /*  date: moment("12-11-2024").format("YYYY-MM-DD"), */
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      Registration(values)
      console.log("first", values);
    },
  });
  const [open1, setOpen1] = useState(0);

  const handleOpen = () => {
    setOpen1(1);
  };

  const handleClose1 = () => {
    setOpen1(0);
  };
  console.log("first", open1);
  return (
    <div className="bg-gray-50 h-screen  m-1">
      <div className="flex h-20 w-[100%]">
        <div className="bg-green-900 w-[90%] border-r rounded-r-lg text-white font-bold text-6xl p-2">
          Todo App
        </div>
        <div className="w-[10%]">
          <button className="!font-semibold" onClick={handleOpen}>
            Login
          </button>
          {open1 === 1 && (
            <div
              onClick={handleClose1}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex w-[55%] border mx-auto bg-white mt-12"
              >
                <div className="w-[40%] bg-green-800 border flex flex-col text-white p-8">
                  <div className="text-3xl font-bold">Login</div>
                  <div className="mt-8 font-semibold">
                    Stay organized by accessing your Tasks, Priorities, and
                    Deadlines all in one place.
                  </div>
                  <div className="flex mt-10 rounded-xl justify-center">
                    <img
                      src="https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png"
                      alt=""
                      className="w-[60%] border rounded-lg border-green-800"
                    />
                  </div>
                </div>
                <div className="w-[60%] border-3">
                  <form className="grid grid-cols-1 mt-28 w-[50%] mx-auto">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="border-b-3 h-10 placeholder:pl-3 border-b-2"
                    />
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className="mt-5 h-10 placeholder:pl-3 border-b-2"
                    />
                    <div className="bg-green-800 text-white mx-auto text-center text-xl font-semibold p-3 rounded-md mt-5 w-[100%]">
                      Login
                    </div>
                    <div
                      onClick={() => {
                        setOpen1(2);
                      }}
                    >
                      or{" "}
                      <span className="text-green-800 font-semibold cursor-pointer">
                        create an account
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {open1 === 2 && (
            <div
              onClick={() => handleClose1()}
              className="fixed w-[100vw] top-0 left-0 h-[100vh] bg-black bg-opacity-30  z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex w-[60%] h-[60%] mt-24 border-3 mx-auto   inset-0 items-center justify-center   bg-white z-50 "
              >
                <div className="w-[40%] h-[100%]  bg-green-800 border flex flex-col text-white p-8 ">
                  <div className="text-3xl font-bold">Signup</div>
                  <div className="mt-8 font-semibold">
                    Stay organized by accessing your Tasks, Priorities, and
                    Deadlines all in one place.
                  </div>
                  <div className="flex mt-6 h-32  rounded-xl justify-center">
                    <img
                      src="https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png"
                      alt=""
                      className="w-[60%] border rounded-lg border-green-800"
                    />
                  </div>
                </div>
                <div className="w-[60%]  border-3 ">
                  <form onSubmit={formik.handleSubmit} className="w-[90%] mx-auto bg-white  h-[90%]">
                    <div className="grid grid-cols-2 mt-16 gap-8">
                      <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Enter your First Name"
                        className="border-b-3 h-10 placeholder:pl-3 border-b-2"
                      />

                      <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Enter your Email"
                        className="h-10 placeholder:pl-3 border-b-2"
                      />
                      <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter Password"
                        className="h-10 placeholder:pl-3 border-b-2"
                      />
                      <input
                        type="number"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        placeholder="Enter your age"
                        className="h-10 placeholder:pl-3 border-b-2"
                      />
                    </div>
                    <button type="submit" className="bg-green-800 text-white mx-auto text-center text-xl font-semibold p-3 rounded-md mt-8 w-[80%]">
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-x-2 mt-5">
        <div className="text-xl font-semibold border text-white bg-green-900 w-[10%] text-center rounded-l-lg">
          All
        </div>
        <div className="text-xl font-semibold border text-white bg-green-900 w-[10%] text-center rounded-r-lg">
          Completed
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <div className="text-4xl font-bold">Tasks</div>
        <div className="text-xl font-semibold text-white w-[9%] p-1 rounded-md bg-green-800">
          + Add Task
        </div>
      </div>
      <div className="border mt-5 w-[80%] mx-auto">
        <div className="border-4 p-5 rounded-md flex m-5 justify-around">
          <div className="text-gray-300">
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className="font-semibold w-[28%]">
            Prepare agenda for board meeting
          </div>
          <div className="flex gap-x-2">
            <div className="text-gray-300">
              <AccessTimeIcon />
            </div>
            <div className="text-gray-500">Thu Jun 13 2024</div>
          </div>
          <div className="text-gray-500">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-5 rounded-md flex m-5 justify-around">
          <div className="text-gray-300">
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className="font-semibold w-[28%]">Test Task</div>
          <div className="flex gap-x-2">
            <div className="text-gray-300">
              <AccessTimeIcon />
            </div>
            <div className="text-gray-500">Wed Nov 13 2024</div>
          </div>
          <div className="text-gray-500">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-5 rounded-md flex m-5 justify-around">
          <div className="text-gray-300">
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className="font-semibold w-[28%]">Check Datasource</div>
          <div className="flex gap-x-2">
            <div className="text-gray-300">
              <AccessTimeIcon />
            </div>
            <div className="text-gray-500">Wed Oct 16 2024</div>
          </div>
          <div className="text-gray-500">
            <ModeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
