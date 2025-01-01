import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const ErrorMessage = (message) => (
  <p className="validation-error-message">{message}</p>
);
const New_Form = () => {
  const schema = Yup.object({
    name: Yup.string().required("Required"),

    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/[a-zA-Z0-9]/, "Invalid Password")
      .required("Required"),
    age: Yup.number()
      .required("Required")
      .min(18, "Greater than 1")
      .max(99, "Less than 100")
      .typeError("Age must be a number"),
    mobile: Yup.number()
      .required("Required")
      .min(1000000000, "Invalid mobile number") // Assuming you want to validate a 10-digit number
      .max(9999999999, "Invalid mobile number"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      mobile: "",
      password: "",
      confirm_pass: "",
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("formick", values);
    },
  });
  return (
    <div className="w-[100%] h-[100vh] p-10  bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 ...">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[70%] h-[100%]   bg-gray-50 m-auto rounded-lg   "
      >
        <div className="text-xl md:text-4xl font-bold text-center p-7 text-gray-700 ">
          Registration Form
        </div>
        <div className="grid grid-cols-2  h-[65%] w-[90%] mx-auto border rounded-md p-1 bg-white">
          <div className="m-1">
            <label className="text-xs md:text-lg font-thin">Name:</label>
            <br />
            <input
              value={formik.values.name}
              type="text"
              name="name"
              onChange={formik.handleChange}
              placeholder=" Enter Your Name"
              className="border-3 w-[100%] h-8 bg-blue-50 outline-none placeholder:text-sm "
            />
         
          </div>
          <div className="m-1">
            <label className="text-xs md:text-lg font-thin">Email:</label>
            <br />
            <input
              value={formik.values.email}
              type="email"
              name="email"
              onChange={formik.handleChange}
              placeholder=" Enter Your Email"
              className="border-3 w-[100%] h-8 bg-blue-50 outline-none placeholder:text-sm "
            />
               {formik.touched.email && formik.errors.email && (
              <p className="validation-error-message !text-red-500 !text-xs">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="m-1">
            <label className="text-xs md:text-lg font-thin">Age:</label>
            <br />
            <input
              value={formik.values.age}
              type="number"
              name="age"
              onChange={formik.handleChange}
              placeholder=" Enter Your Age"
              className="border-3 w-[100%] h-8 bg-blue-50 outline-none placeholder:text-sm "
            />
          </div>
          <div className="m-1">
            <label className="text-xs md:text-lg font-thin">Mobile No.:</label>
            <br />
            <input
              value={formik.values.mobile}
              type="tel"
              name="mobile"
              onChange={formik.handleChange}
              placeholder=" Enter Your Mobile No. "
              className="border-3 w-[100%] h-8 bg-blue-50 outline-none placeholder:text-sm "
            />
          </div>
          <div className="m-1">
            <label className="text-xs md:text-lg font-thin">Password:</label>
            <br />
            <input
              type="password"
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              placeholder=" Enter Your Password"
              className="border-3 w-[100%] h-8 bg-blue-50 outline-none placeholder:text-sm "
            />
          </div>
          <div className="m-1">
            <label className="text-xs md:text-lg font-thin">
              Confirm Password:
            </label>
            <br />
            <input
              type="password"
              value={formik.values.confirm_pass}
              name="confirm_pass"
              onChange={formik.handleChange}
              placeholder=" Enter Your Confirm Password"
              className="border-3 w-[100%] h-8 bg-blue-50 outline-none placeholder:text-sm "
            />
          </div>
        </div>
        <button
          type="submit"
          className="md:mt-5 h-1 text-sm text-center flex mx-auto items-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default New_Form;
