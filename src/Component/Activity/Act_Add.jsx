import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Act_Post, Act_Put } from "../../Services/Act_Post";
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
    title: "",
    dueDate: "",
    completed: false,
  });

  useEffect(() => {
    setData({
      title: items?.title,
      dueDate: items?.dueDate || "",
      completed: items?.completed || false,
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
      completed: !data1.completed,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items) {
      Act_Put(data1, items?.id);
    } else {
      Act_Post(data1);
    }
    handleClose2();
    setFetcher(!fetcher);

    Act_Post(data1);
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
        className="text-xl font-semibold text-white p-1 rounded-md bg-blue-800"
      >
        + Add Activities
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
                Task Activities
              </label>
              <br />
              <input
                name="title"
                value={data1.title}
                onChange={handleChange}
                type="text"
                className="border-2 mt- rounded-md  w-[100%] outline-none"
                placeholder="Enter the task Activities"
              />
              <label className="text-gray-500   font-semibold ">Due Date</label>
              <br />
              <input
                name="dueDate"
                value={data1.dueDate}
                onChange={handleChange}
                type="text"
                className="border-2  rounded-md  w-[100%] outline-none"
                placeholder="Enter the task Activities"
              />
              <label className="text-gray-500  font-semibold ">Status</label>
              <br />
              <input
                type="checkbox"
                checked={data1.completed}
                onChange={handleCheckbox}
              />
              <label className="ml-2">
                {data1.completed ? "Completed" : "Not Completed"}
              </label>
              <br />
              <button
                type="submit"
                className="bg-blue-800 cursor-pointer text-white  text-center  text-lg font-semibold p-1 rounded-md mt-3 w-[100%]"
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
