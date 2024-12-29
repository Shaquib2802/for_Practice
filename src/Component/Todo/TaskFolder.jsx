import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import React, { useEffect, useState } from "react";
import { GetData } from "../../Services/Get_data";
import Add_Task from "../Add_Task/Add_Task";
import { DeleteData, PutData } from "../../Services/Post Data";

const TaskFolder = () => {
  const [fetcher, setFetcher] = useState(false);
  const [items, setItems] = useState();
  const [data, setData] = useState();
  const [open2, setOpen2] = useState();
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const DataApi = async () => {
    const data = await GetData();

    console.log("data(Item)", data?.data?.items);
    setData(data?.data?.items);
  };
  const deleteAPI = async (id) => {
    DeleteData(id);
    setTimeout(() => {
      setFetcher(!fetcher);
    }, "1000");
  };

  const handleCheckbox = (i) => {
    const updateData = { ...i, is_completed: !i.is_completed };
    PutData(updateData, i?._id);
    setTimeout(() => {
      setFetcher(!fetcher);
    }, "1000");
  };

  useEffect(() => {
    DataApi();
  }, [fetcher]);

  return (
    <>
      <div className="flex justify-around mt-8">
        <div className="text-4xl font-bold">Tasks</div>

        <Add_Task
          fetcher={fetcher}
          setItems={setItems}
          open2={open2}
          setOpen={setOpen2}
          handleOpen={handleOpen2}
          items={items}
          setFetcher={setFetcher}
        />
      </div>
      <div>
        {data?.map((i, index) => (
          <div key={index} className="border mt-5 w-[80%] mx-auto">
            <div className="border-4 p-2 rounded-md flex m-5 justify-around">
              <div>
                <input
                  checked={i?.is_completed}
                  type="checkbox"
                  className="cursor-pointer "
                  onChange={() => handleCheckbox(i)}
                />
              </div>
              <div>{i?.description}</div>
              <div className="flex">
                <div>
                  <AccessTimeIcon />
                </div>
                <div>{i?.updated_at}</div>
              </div>

              <div
                className="text-gray-500  "
                onClick={() => {
                  handleOpen2();
                  setItems(i);
                }}
              >
                <ModeIcon />
              </div>
              <div>
                <DeleteIcon
                  className="text-gray-500 cursor-pointer"
                  onClick={() => deleteAPI(i?._id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskFolder;
