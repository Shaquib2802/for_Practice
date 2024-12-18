import React, { useState } from "react";
import { TbMobiledata } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";

const Database = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      skill: "",
      address: "",
      designation: ""
      /*  date: moment("12-11-2024").format("YYYY-MM-DD"), */
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("first", values)
    },
  });
  const [open, setOpen] = useState();
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <div className="w-[100%] p-5  ">
      <div className="p-10 border ">
        <div className="flex justify-between   ">
          <button
            onClick={handleOpen}
            className="border hidden md:block rounded-md bg-green-600 md:p-2 text-white text-sm md:w-[11%]"
          >
            Add New Record
          </button>
          {open && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
              onClick={handleClose}
            >
              <form
                className=" border w-[50%] h-[80%] bg-white  "
                onClick={(e) => e.stopPropagation()}
                onSubmit={formik?.handleSubmit}
              >
                <div className="flex flex-col    ">
                  <div className="text-2xl font-semibold flex items-center justify-center">
                    Employee Form
                  </div>
                  <label className="mx-2 mt-2">Name:</label>
                  <input
                    type="text"
                    value={formik.values?.name}
                    placeholder="Enter your Name"
                    name="name"
                    onChange={formik?.handleChange}
                    className="border-2 rounded-md w-[90%] mx-2 placeholder:"
                  />
                   
                  <label className="mx-2 mt-2">Age:</label>
                  <input
                    type="number"
                    placeholder="Enter your Age"
                    value={formik.values?.age}
                    name="age"
                    onChange={formik?.handleChange}
                    className="border-2 rounded-md w-[90%] mx-2 placeholder:"
                  />
                  <label className="mx-2 mt-2">Skill:</label>
                  <input
                    type="text"
                    value={formik.values?.skill}

                    placeholder="Enter your Skill"
                    name="skill"
                    onChange={formik?.handleChange}
                    className="border-2 rounded-md w-[90%] mx-2 placeholder:"
                  />
                  <label className="mx-2 mt-2">Address:</label>
                  <input
                    type="text"
                    value={formik.values?.address}

                    placeholder="Enter your Address"
                    name="address"
                    onChange={formik?.handleChange}
                    className="border-2 rounded-md w-[90%] mx-2 placeholder:"
                  />
                  <label className="mx-2 mt-2">Designation:</label>
                  <input
                    type="text"
                    placeholder="Enter your Designation:"
                    value={formik.values?.designation}

                    name="designation"
                    onChange={formik?.handleChange}
                    className="border-2 rounded-md w-[90%] mx-2 placeholder:"
                  />

                  <button type="submit" className="w-60 text-white bg-green-600 font-semibold  h-10 rounded-md text-center mt-6 mx-auto p-2 ">
                    Login
                  </button>
                  <div className="w-60 text-xs mt-2 mx-auto">
                    by signing in, you are conforming that you have accepted our{" "}
                    <span className="text-blue-500">Privacy & Policy</span>
                  </div>
                </div>
              </form>
            </div>
          )}
          <div className="block md:hidden bg-green-600 text-sm rounded-md p-1 text-white font-semibold">
            ADD
          </div>
          <div>
            <label className="text-gray-700 text-sm mt-1.5 font-semibold">
              Search:
            </label>
            <input
              type="text"
              className="ml-2 h-7 mt-1 border border-gray-400 rounded-sm outline-none placeholder:pl-1 text-xs"
              placeholder="Search Data"
            />
          </div>
        </div>
        <table className="mt-5  ">
          <tr>
            <th className="w-[2%] border">#</th>
            <th className="border">
              <div className="flex items-center justify-between mx-2">
                <div className="font-semibold text-xs">Name</div>
                <div className="">
                  <TbMobiledata className="text-xl text-gray-400" />
                </div>
              </div>
            </th>
            <th className=" border">
              <div className="flex items-center justify-between mx-2">
                <div className="font-semibold text-xs">Age</div>
                <div className="">
                  <TbMobiledata className="text-xl text-gray-400" />
                </div>
              </div>
            </th>
            <th className=" border">
              <div className="flex items-center justify-between mx-2">
                <div className="font-semibold text-xs">Skill</div>
                <div className="">
                  <TbMobiledata className="text-xl text-gray-400" />
                </div>
              </div>
            </th>
            <th className=" border">
              <div className="flex items-center justify-between mx-2">
                <div className="font-semibold text-xs">Address</div>
                <div className="">
                  <TbMobiledata className="text-xl text-gray-400" />
                </div>
              </div>
            </th>
            <th className=" border">
              <div className="flex items-center justify-between mx-2">
                <div className="font-semibold text-xs">Designation</div>
                <div className="">
                  <TbMobiledata className="text-xl text-gray-400" />
                </div>
              </div>
            </th>
            <th className=" border"></th>
            <th className=" border"></th>
          </tr>
          <tr className="bg-slate-50 text-xs text-black ">
            <td className="border  p-2">12</td>
            <td className="border p-2 ">Rosy</td>
            <td className="border p-2">60</td>
            <td className="border p-2">PHP</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Software Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>

          <tr className=" text-xs text-black ">
            <td className="border  p-2">11</td>
            <td className="border p-2 ">Andrew</td>
            <td className="border p-2">38</td>
            <td className="border p-2">PHP</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>

          <tr className="bg-slate-50 text-xs text-black ">
            <td className="border  p-2">10</td>
            <td className="border p-2 ">Nathan</td>
            <td className="border p-2">28</td>
            <td className="border p-2">PHP</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className=" text-xs text-black ">
            <td className="border  p-2">9</td>
            <td className="border p-2 ">Ranson</td>
            <td className="border p-2">23</td>
            <td className="border p-2">JQuery</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className="bg-slate-50 text-xs text-black ">
            <td className="border  p-2">8</td>
            <td className="border p-2 ">David</td>
            <td className="border p-2">28</td>
            <td className="border p-2">HTML</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className=" text-xs text-black ">
            <td className="border  p-2">7</td>
            <td className="border p-2 ">Turtle</td>
            <td className="border p-2">26</td>
            <td className="border p-2">MySQL</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className="bg-slate-50 text-xs text-black ">
            <td className="border  p-2">6</td>
            <td className="border p-2 ">Tim</td>
            <td className="border p-2">28</td>
            <td className="border p-2">Angular</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className=" text-xs text-black ">
            <td className="border  p-2">5</td>
            <td className="border p-2 ">Shoib</td>
            <td className="border p-2">25</td>
            <td className="border p-2">NodeJS</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className="bg-slate-50 text-xs text-black ">
            <td className="border  p-2">4</td>
            <td className="border p-2 ">Arnoid</td>
            <td className="border p-2">40</td>
            <td className="border p-2">JavaScript</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Web Developer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
          <tr className=" text-xs text-black ">
            <td className="border  p-2">3</td>
            <td className="border p-2 ">Philip</td>
            <td className="border p-2">35</td>
            <td className="border p-2">JQuery</td>
            <td className="border p-2"> Delhi, India</td>
            <td className="border p-2">Programmer</td>
            <td className="border p-2 ">
              <MdModeEditOutline className="text-lg" />
            </td>
            <td className="border p-2">
              <MdDelete className="text-lg" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Database;
