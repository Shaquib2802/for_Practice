import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import React, { useEffect, useState } from "react";
import { GetData } from "../../Services/Get_data";
import Add_Task from "../Add_Task/Add_Task";

const TaskFolder = () => {
  const [fetcher,setFetcher]=useState(false)
  const [items,setItems] =useState()
  const [data, setData] = useState();
  const [open2, setOpen2] = useState();
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const DataApi = async () => {
    const data = await GetData();
    console.log("aa gaya", data);
    console.log("data", data?.data?.items);
    setData(data?.data?.items);
  };
  useEffect(() => {
    DataApi();
  },[fetcher] );

  return (
    <>
      <div className="flex justify-around mt-8">
        <div className="text-4xl font-bold">Tasks</div>

        <Add_Task fetcher={fetcher} open2={open2} setOpen={setOpen2} handleOpen={handleOpen2}  items={items} setItems={setItems}/>
      </div>
      <div>
        {data?.map((i, index) => (
          <div key={index} className="border mt-5 w-[80%] mx-auto">
            <div className="border-4 p-2 rounded-md flex m-5 justify-around">
              <div>
                <CheckBoxOutlineBlankIcon />
              </div>
              <div>{i?.description}</div>
              <div className="flex">
                <div>
                  <AccessTimeIcon />
                </div>
                <div>{i?.updated_at}</div>
              </div>

              <div className="text-gray-500  " onClick={handleOpen2} >
                <ModeIcon  />
              </div>
              <div>
                <DeleteIcon className="text-gray-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskFolder;
