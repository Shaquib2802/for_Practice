import React, { useState } from "react";
import "./index.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ModeIcon from "@mui/icons-material/Mode";

const Interface = () => {
  return (
    <div className="bg-gray-50 h-screen  m-1">
      <div className="flex h-20 w-[100%]">
        <div className="bg-green-900 w-[90%] border-r rounded-r-lg text-white font-bold text-6xl p-2">
          Todo App
        </div>
        <div className=" w-[10%]  ">
          <button className=" !font-semibold "> Login</button>
        </div>
      </div>
      <div className="flex justify-center   gap-x-2 mt-5 ">
        <div className="text-xl font-semibold border text-white bg-green-900 w-[10%] text-center rounded-l-lg">
          All
        </div>
        <div className="text-xl font-semibold border text-white bg-green-900 w-[10%] text-center  rounded-r-lg">
          Completed
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <div className="text-4xl font-bold ">Tasks</div>
        <div className="text-xl font-semibold text-white w-[9%] p-1 rounded-md bg-green-800">
          + Add Task
        </div>
      </div>
      <div className="border mt-5 w-[80%] mx-auto">
        <div className="border-4 p-5 rounded-md flex m-5 justify-around ">
          <div className="text-gray-300">
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className="font-semibold  w-[28%]">
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
        <div className="border-4 p-5 rounded-md flex m-5 justify-around ">
          <div className="text-gray-300">
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className="font-semibold w-[28%] "> Test Task</div>
          <div className="flex gap-x-2">
            <div className="text-gray-300">
              <AccessTimeIcon />
            </div>
            <div className="text-gray-500 ">Wed Nov 13 2024</div>
          </div>
          <div className="text-gray-500">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-5 rounded-md flex m-5 justify-around ">
          <div className="text-gray-300">
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className="font-semibold w-[28%] ">Check Datasource</div>
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
