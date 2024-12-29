import React, { useState } from "react";
import "./index.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ModeIcon from "@mui/icons-material/Mode";
import { useFormik } from "formik";
import Act_Folder from "./Act_folder";
import { NewLogin } from "../../Services/NewLogin";
import { Registration } from "../../Services/Register";

const Activity = () => {
     const [data1, setData] = useState({
        mail: "",
        password1: "",
      });
      
      const handleChange = (e) => {
        const { name, values } = e.target;
    
        console.log(e.target.value);
    
        setData(() => ({
          ...data1,
          [name]: values,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        NewLogin(data1);
    
        console.log("data", data1);
      };
      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
    
          /*  date: moment("12-11-2024").format("YYYY-MM-DD"), */
        },
        enableReinitialize: true,
        onSubmit: (values) => {
          Registration(values);
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
        <div className="bg-blue-900 w-[90%] border-r rounded-r-lg text-white font-bold text-6xl p-2">
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
                <div className="w-[40%] bg-blue-800 border flex flex-col text-white p-8">
                  <div className="text-3xl font-bold">Login</div>
                  <div className="mt-8 font-semibold">
                    Stay organized by accessing your Tasks, Priorities, and
                    Deadlines all in one place.
                  </div>
                  <div className="flex mt-10 rounded-xl justify-center">
                    <img
                      src="https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png"
                      alt=""
                      className="w-[60%] border rounded-lg border-blue-800"
                    />
                  </div>
                </div>
                <div className="w-[60%] border-3">
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 mt-28 w-[50%] mx-auto"
                  >
                    <input
                      type="text"
                      name="mail"
                      onChange={handleChange}
                      value={data1.mail}
                      placeholder="Enter Your Email"
                      className="border-b-3 h-10 placeholder:pl-3 border-b-2"
                    />
                    <input
                      type="password"
                      name="password1"
                      onChange={handleChange}
                      value={data1.password1}
                      placeholder="Enter Your Password"
                      className="mt-5 h-10 placeholder:pl-3 border-b-2"
                    />
                    <button
                      type="submit"
                      className="bg-blue-800 cursor-pointer text-white mx-auto text-center text-xl font-semibold p-3 rounded-md mt-5 w-[100%]"
                    >
                      Login
                    </button>
                    <div
                      onClick={() => {
                        setOpen1(2);
                      }}
                    >
                      or{" "}
                      <span className="text-blue-800 font-semibold cursor-pointer">
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
                <div className="w-[40%] h-[100%]  bg-blue-800 border flex flex-col text-white p-8 ">
                  <div className="text-3xl font-bold">Signup</div>
                  <div className="mt-8 font-semibold">
                    Stay organized by accessing your Tasks, Priorities, and
                    Deadlines all in one place.
                  </div>
                  <div className="flex mt-6 h-32  rounded-xl justify-center">
                    <img
                      src="https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png"
                      alt=""
                      className="w-[60%] border rounded-lg border-blue-800"
                    />
                  </div>
                </div>
                <div className="w-[60%]  border-3 ">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="w-[90%] mx-auto bg-white  h-[90%]"
                  >
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
                    <button
                      type="submit"
                      className="bg-blue-800 text-white mx-auto text-center text-xl font-semibold p-3 rounded-md mt-8 w-[80%]"
                    >
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
        <div className="text-xl font-semibold border text-white bg-blue-900 w-[10%] text-center rounded-l-lg">
          All
        </div>
        <div className="text-xl font-semibold border text-white bg-blue-900 w-[10%] text-center rounded-r-lg">
          Completed
        </div>
      </div>
      
      <Act_Folder/>
    </div>
  )
}

export default Activity
