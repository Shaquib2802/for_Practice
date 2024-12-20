import { useFormik } from "formik";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AddData } from "../../Services/Add Data";
const Add_Task = () => {
  const [data1, setData] = useState({
    description: "",
    title: "",
    is_completed: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target);

    setData(() => ({
      ...data1,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddData(data1);
    console.log("data", data1);
  };
  /*  const formik = useFormik({
    initialValues: {
      description: "",
      title: "",
      status: {
        completed: "",
        not_completed: "",
      },
 */
  /*  date: moment("12-11-2024").format("YYYY-MM-DD"), */
  /*   },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("first", values);
    },
  }); */
  const [open2, setOpen2] = useState();
  const handleOpen2 = () => {
    setOpen2(!open2);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <div
        onClick={handleOpen2}
        className="text-xl font-semibold text-white p-1 rounded-md bg-green-800"
      >
        + Add Task
      </div>
      {open2 && (
        <div
          onClick={handleClose2}
          className=" w-[100%] pt-48 absolute inset-0 items-center    bg-black bg-opacity-40   "
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="p-5 w-[40%] h-[100%] border-black bg-white  mx-auto border-2 rounded-md"
          >
            <div className=" text-3xl font-semibold mt-5">Task Details</div>
            <div className="mt-3">
              <label className="text-gray-500 font-semibold ">
                Task Description
              </label>
              <br />
              <input
                name="description"
                value={data1.description}
                onChange={handleChange}
                type="text"
                className="border-2 mt- rounded-md  w-[100%] outline-none"
                placeholder="Enter the task description"
              />
              <label className="text-gray-500   font-semibold ">Title</label>
              <br />
              <input
                name="title"
                value={data1.title}
                onChange={handleChange}
                type="text"
                className="border-2  rounded-md  w-[100%] outline-none"
                placeholder="Enter the task description"
              />
              <label className="text-gray-500  font-semibold ">Status</label>
              <br />
              <RadioGroup
                row
                name="is_completed"
                onChange={handleChange}
                aria-labelledby="demo-row-radio-buttons-group-label"
              >
                <FormControlLabel
                  name="completed"
                  value={data1.not_completed}
                  control={<Radio />}
                  label="Completed"
                />
                <FormControlLabel
                  name="not_completed"
                  control={<Radio />}
                  value={!data1.not_completed}
                  label="Not Completed"
                />
              </RadioGroup>
              <br />
              <button
                type="submit"
                className="bg-green-800 cursor-pointer text-white  text-center  text-lg font-semibold p-1 rounded-md mt-3 w-[100%]"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Add_Task;
