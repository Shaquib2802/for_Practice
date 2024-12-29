import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import React, { useEffect, useState } from "react";
import Act_Add from "./Act_Add";

import { Act_get } from "../../Services/Act_Get";
import { Act_Delete, Act_Put } from "../../Services/Act_Post";

const Act_Folder = () => {
  const [fetcher, setFetcher] = useState(false);
  const [items, setItems] = useState();
  const [data, setData] = useState();
  const [open2, setOpen2] = useState();
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const DataApi = async () => {
    const data = await Act_get();

    console.log("data(Item--)", data?.data);
    setData(data?.data);
  };
  const deleteAPI = async (id) => {
    Act_Delete(id);
    setTimeout(() => {
      setFetcher(!fetcher);
    }, "1000");
  };

  const handleCheckbox = (i) => {
    const updateData = { ...i, completed: !i.completed };
    Act_Put(updateData, i?._id);
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
        <div className="text-4xl font-bold">Activity</div>

        <Act_Add
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
                  checked={i?.completed}
                  type="checkbox"
                  className="cursor-pointer "
                  onChange={() => handleCheckbox(i)}
                />
              </div>
              <div>{i?.title}</div>
              <div className="flex">
                <div>
                  <AccessTimeIcon />
                </div>
                <div>{i?.dueDate}</div>
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
                  onClick={() => deleteAPI(i?.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Act_Folder;
