import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AddData } from "../../Services/Add Data";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";
import { PostData, PutData } from "../../Services/Post Data";
const Add_Task = ({
  fetcher,
  setFetcher,
  items,
  open2,
  setOpen,
  handleOpen,
  setItems,
}) => {
  const [data1, setData] = useState({
    description: "",
    title: "",
    is_completed: false,
  });

  useEffect(() => {
 
      setData({
        title: items?.title,
        description: items?.description || "",
        is_completed: items?.is_completed || false,
      });
    
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target);

    setData(() => ({
      ...data1,
      [name]: value,
    }));
  };
  const handleCheckbox = () => {
   
    setData({
      ...data1,
      is_completed: !data1.is_completed,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items) {
      PutData(data1, items?._id);
    } else {
      PostData(data1);
    }
    handleClose2();
    setFetcher(!fetcher);

    AddData(data1);
    handleClose2();
    setFetcher(!fetcher);
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

  const handleClose2 = () => {
    setOpen(false);
    setItems();
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="text-xl font-semibold text-white p-1 rounded-md bg-green-800"
      >
        + Add Task
      </div>
      {open2 && (
        <div
          onClick={handleClose2}
          className="fixed w-[100%] h-[100vh]  inset-0 items-center    bg-black bg-opacity-40   "
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="p-5 w-[40%] h-[70%] mt-28 border-black bg-white  mx-auto border-2 rounded-md"
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
              <input
                type="checkbox"
                checked={data1.is_completed}
                onChange={handleCheckbox} 
              />
              <label className="ml-2">{data1.is_completed ? "Completed" : "Not Completed"}</label>
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
